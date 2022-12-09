import React, {useEffect, useRef} from "react";
import dynamic from "next/dynamic";
import Script from "next/script";

import {onScroll, onSwipe} from "../utils/onScroll";
import {clothes} from "../database/clothing";
import {handleBubbleClick} from "../utils/handleBubbleClick";
import {createBubbles} from "../utils/createBubbles";
import {Header} from "../components/Header";

const Sketch = dynamic(() => import("react-p5"), {ssr: false});

export default function Gallery() {
  let bubbles = [];
  let hammer;
  let canvas;

  useEffect(() => {
    window.addEventListener("wheel", (event) => onScroll(event, bubbles));

    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        fetchRequests.push(entry.name);
        inputEl.current.innerHTML += `${entry.name} <br>`;

        if (fetchRequests.length > clothes.length) {
          inputEl.current.remove();
        }
      }
    });

    observer.observe({
      entryTypes: ["resource"],
    });

    return () => {
      if (hammer) {
        hammer.destroy();
      }
      window.removeEventListener("wheel", (event) => onScroll(event, bubbles));
    };
  }, []);

  const preload = (p5) => {
    createBubbles(p5, clothes, bubbles);
  };

  const setup = (p5, canvasParentRef) => {
    canvas = p5
      .createCanvas(window.innerWidth, window.innerHeight)
      .parent(canvasParentRef);

    canvas.mousePressed(() => {
      handleBubbleClick(p5, bubbles);
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
          hammer = new Hammer(document.body, {preventDefault: true});

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
          color: "green",
          background: "black",
        }}
        ref={inputEl}
      ></div>
      <Sketch setup={setup} draw={draw} preload={preload} />
    </>
  );
}
