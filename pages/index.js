import React, { useEffect } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import Script from "next/script";
import { onScroll } from "../utils/onScroll";
import { SetupCanvas } from "../utils/setupCanvas";
import { drawCanvas } from "../utils/drawCanvas";
import { preloadCanvas } from "../utils/preloadCanvas";

const Sketch = dynamic(
  () =>
    import("react-p5").then((mod) => {
      require("p5/lib/addons/p5.sound");
      return mod.default;
    }),
  { ssr: false }
);

let bubbles = [];

export default function Home() {
  const router = useRouter();
  let hammer;
  let images;
  let song;
  let video;

  useEffect(() => {
    window.addEventListener("wheel", (event) => onScroll(event, bubbles));
    return () => {
      hammer.destroy();
      window.removeEventListener("wheel", (event) => onScroll(event, bubbles));
    };
  }, []);

  // CAN YOU OBJECT DECONSTRCUT THESE FUNCTIONS SO CHANGE PRELOADCANVAS = PRELOAD?
  const preload = (p5) => {
    ({ images, song, video } = preloadCanvas(p5));
  };

  const setup = (p5, canvasParentRef) => {
    bubbles = SetupCanvas(p5, canvasParentRef, images, video, router);
  };

  const draw = (p5) => drawCanvas(p5, bubbles);

  return (
    <>
      <Script
        id="hammer"
        src="https://hammerjs.github.io/dist/hammer.min.js"
        onLoad={() => {
          hammer = new Hammer(document.body, { preventDefault: true });

          hammer.get("pan").set({
            direction: Hammer.DIRECTION_ALL,
          });

          hammer.on("pan", (event) => {
            for (let b of bubbles) {
              b.swiped(event);
            }
          });
        }}
      ></Script>
      <Sketch setup={setup} draw={draw} preload={preload} />
    </>
  );
}
