import React, { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import Script from "next/script";
import yn from "yn";

import { onScroll, onSwipe } from "../utils/onScroll";
import { products } from "../database/products";
import { handleBubbleClick } from "../utils/handleBubbleClick";
import { createBubbles } from "../utils/createBubbles";
import { Header } from "../components/Header";

const Sketch = dynamic(() => import("react-p5"), { ssr: false });

export default function Home() {
  let bubbles = [];
  let hammer;
  let video;
  let canvas;
  let showIntroVideo = true;
  let skipButton;
  let mediaLoaded = 0;

  useEffect(() => {
    window.addEventListener("wheel", (event) => onScroll(event, bubbles));

    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        fetchRequests.push(entry.name);
        inputEl.current.innerHTML += `${entry.name} <br>`;

        if (fetchRequests.length > products.length) {
          inputEl.current.remove();
        }
      }
    });

    observer.observe({
      entryTypes: ["resource"],
    });

    return () => {
      hammer.destroy();
      window.removeEventListener("wheel", (event) => onScroll(event, bubbles));
    };
  }, []);

  const preload = (p5) => {
    handleSecondaryMediaLoading(p5);
  };

  const handleSecondaryMediaLoading = (p5) => {
    ({ video, bubbles } = createBubbles(
      p5,
      products,
      bubbles,
      video,
      handleMediaLoaded
    ));
  };

  const handleMediaLoaded = (p5) => {
    mediaLoaded++;
    if (mediaLoaded === products.length) {
      skipButton = p5.createButton("skip video");
      skipButton.position(0, 0);
      skipButton.style("background-color", "#ff0000");
      skipButton.mousePressed(() => {
        showIntroVideo = yn(localStorage.setItem("showIntroVideo", false));
      });
    }
  };
  const setup = (p5, canvasParentRef) => {
    showIntroVideo = yn(localStorage.getItem("showIntroVideo"));
    canvas = p5
      .createCanvas(window.innerWidth, window.innerHeight)
      .parent(canvasParentRef);

    canvas.mousePressed(() => {
      handleBubbleClick(p5, bubbles, video);
    });
  };

  const draw = (p5) => {
    p5.background(0);

    for (let b of bubbles) {
      b.show();
    }
  };

  const inputEl = useRef(null);
  const fetchRequests = [];

  return (
    <>
      <Header world={true} />
      <Script
        id="hammer"
        src="https://hammerjs.github.io/dist/hammer.min.js"
        onLoad={() => {
          hammer = new Hammer(document.body, { preventDefault: true });

          hammer.get("pan").set({
            direction: Hammer.DIRECTION_ALL,
          });

          hammer.on("pan", (event) => {
            onSwipe(event, bubbles);
          });
        }}
      ></Script>
      <div
        style={{
          position: "fixed",
          width: "100%",
          height: "100vh",
          fontFamily: "monospace",
          color: "white",
        }}
        ref={inputEl}
      ></div>
      <Sketch setup={setup} draw={draw} preload={preload} />
    </>
  );
}
