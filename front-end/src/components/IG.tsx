"use client";
import { useEffect } from "react";
import Head from "next/head";

function InstagramPost() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//platform.instagram.com/en_US/embeds.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <div className="insta-embed">
      <blockquote
        className="instagram-media"
        data-instgrm-captioned
        data-instgrm-version="6"
        style={{
          background: "#FFF",
          border: "0",
          borderRadius: "3px",
          boxShadow: "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
          margin: "1px",
          maxWidth: "658px",
          padding: "0",
          width: "99.375%",
          WebkitWidth: "calc(100% - 2px)",
          width: "calc(100% - 2px)",
        }}
      >
        <div style={{ padding: "8px" }}>
          <div
            style={{
              background: "#F8F8F8",
              lineHeight: "0",
              marginTop: "40px",
              padding: "50.0% 0",
              textAlign: "center",
              width: "100%",
            }}
          >
            <div
              style={{
                background:
                  "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAAGFBMVEUiIiI9PT0eHh4gIB4hIBkcHBwcHBwcHBydr+JQAAAACHRSTlMABA4YHyQsM5jtaMwAAADfSURBVDjL7ZVBEgMhCAQBAf//42xcNbpAqakcM0ftUmFAAIBE81IqBJdS3lS6zs3bIpB9WED3YYXFPmHRfT8sgyrCP1x8uEUxLMzNWElFOYCV6mHWWwMzdPEKHlhLw7NWJqkHc4uIZphavDzA2JPzUDsBZziNae2S6owH8xPmX8G7zzgKEOPUoYHvGz1TBCxMkd3kwNVbU0gKHkx+iZILf77IofhrY1nYFnB/lQPb79drWOyJVa/DAvg9B/rLB4cC+Nqgdz/TvBbBnr6GBReqn/nRmDgaQEej7WhonozjF+Y2I/fZou/qAAAAAElFTkSuQmCC); display: block; height: 44px; margin: 0 auto -44px; position: relative; top: -22px; width: 44px;",
              }}
            ></div>
          </div>
          <p style={{ margin: "8px 0 0 0", padding: "0 4px" }}>
            <a
              href="https://www.instagram.com/p/BEbuxyvm3DO/"
              style={{
                color: "#000",
                fontFamily: "Arial, sans-serif",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: "normal",
                lineHeight: "17px",
                textDecoration: "none",
                wordWrap: "break-word",
              }}
              target="_blank"
            >
              Guess which I chose.
            </a>
          </p>
          <p
            style={{
              color: "#c9c8cd",
              fontFamily: "Arial, sans-serif",
              fontSize: "14px",
              lineHeight: "17px",
              marginBottom: "0",
              marginTop: "8px",
              overflow: "hidden",
              padding: "8px 0 7px",
              textAlign: "center",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            A photo posted by Sean Sperte (@sperte) on{" "}
            <time
              style={{
                fontFamily: "Arial, sans-serif",
                fontSize: "14px",
                lineHeight: "17px",
              }}
              dateTime="2016-04-20T19:10:04+00:00"
            >
              Apr 20, 2016 at 12:10pm PDT
            </time>
          </p>
        </div>
      </blockquote>
    </div>
  );
}

export default InstagramPost;
