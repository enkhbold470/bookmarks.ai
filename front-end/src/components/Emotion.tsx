"use client";
import { useEffect } from "react";
import * as tmImage from "@teachablemachine/image";
import Script from "next/script";
import WebcamCanvas from "./Cam";

export default function TeachableMachine() {
  let model: tmImage.CustomMobileNet | null = null;
  let webcam: tmImage.Webcam | null = null;
  let labelContainer: HTMLElement | null = null;
  let maxPredictions: number = 0;

  useEffect(() => {
    async function init() {
      const URL = "https://teachablemachine.withgoogle.com/models/QQaTPPP7Q/";
      const modelURL = URL + "model.json";
      const metadataURL = URL + "metadata.json";

      model = await tmImage.load(modelURL, metadataURL);
      maxPredictions = model.getTotalClasses();

      const flip = true;
      webcam = new tmImage.Webcam(200, 200, flip);
      await webcam.setup();
      await webcam.play();
      window.requestAnimationFrame(loop);

      const webcamContainer = document.getElementById("webcam-container");
      if (webcamContainer) {
        webcamContainer.appendChild(webcam.canvas);
      }

      labelContainer = document.getElementById("label-container");
      if (labelContainer) {
        Array.from({ length: maxPredictions }).forEach(() => {
          labelContainer!.appendChild(document.createElement("div"));
        });
      }
    }

    async function loop() {
      if (webcam) {
        webcam.update();
        await predict();
        window.requestAnimationFrame(loop);
      }
    }

    async function predict() {
      if (webcam && model && labelContainer) {
        const prediction = await model.predict(webcam.canvas);
        Array.from({ length: maxPredictions }).forEach((_, i) => {
          const classPrediction =
            prediction[i].className +
            ": " +
            prediction[i].probability.toFixed(2);
          if (labelContainer) {
            labelContainer.childNodes[i].textContent = classPrediction;
          }
        });
      }
    }

    init();

    return () => {
      if (webcam) {
        webcam.stop();
      }
    };
  }, []);

  return (
    <>
      <div className="flex flex-col items-center gap-2">
        <div className="mt-2 text-lg leading-8 text-gray-600">
          Sentiment Score
        </div>

        {/* <div className="border-2 w-min h-m  in" id="webcam-container"></div> */}
        <div className="w-min ">
          <WebcamCanvas />
        </div>
        <div id="label-container" className="w-min h-min "></div>
      </div>
    </>
  );
}
