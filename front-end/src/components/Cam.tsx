import React, { useEffect, useRef } from "react";

const WebcamCanvas: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;

    if (!video || !canvas) return;

    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        video.srcObject = stream;
        video.play();

        const context = canvas.getContext("2d");
        if (!context) return;

        const intervalId = setInterval(() => {
          context.drawImage(video, 0, 0, canvas.width, canvas.height);
        }, 1000 / 30); // Draw 30 frames per second

        return () => clearInterval(intervalId); // Clean up on unmount
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <video ref={videoRef} style={{ display: "none" }} />
      <canvas ref={canvasRef} width="300" height="300" />
    </div>
  );
};

export default WebcamCanvas;
