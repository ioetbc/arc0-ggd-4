import React, { useEffect } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import Script from "next/script";
import yn from "yn";

import { onScroll } from "../utils/onScroll";
import { products } from "../database/products";
import { handleBubbleClick } from "../utils/handleBubbleClick";
import { createBubbles } from "../utils/createBubbles";

const Sketch = dynamic(
  () =>
    import("react-p5").then((mod) => {
      require("p5/lib/addons/p5.sound");
      return mod.default;
    }),
  { ssr: false }
);

export default function Home() {
  const router = useRouter();
  let bubbles = [];
  let hammer;
  let video;
  let logo;
  let canvas;
  let introVideo;
  let showIntroVideo = true;
  let skipButton;
  let mediaLoaded = 0;

  // USE MOUSEWHEEL INSTEAD OF JS WHEEL EVENT https://p5js.org/reference/#/p5/mouseWheel
  // SEE IF YOU CAN SCRAP HAMMER AND JUST USE MOUSEX AND MOUSEY SEEMS TO BE BUILT IN ALREADY
  useEffect(() => {
    window.addEventListener("wheel", (event) => onScroll(event, bubbles));
    return () => {
      hammer.destroy();
      window.removeEventListener("wheel", (event) => onScroll(event, bubbles));
    };
  }, []);

  const preload = (p5) => {
    introVideo = p5.createVideo("/videos/intro-video.mp4", () =>
      handleSecondaryMediaLoading(p5)
    );
  };

  const handleSecondaryMediaLoading = (p5) => {
    introVideo.volume(0);
    introVideo.loop();
    introVideo.hide();
    ({ video, bubbles } = createBubbles(
      p5,
      products,
      bubbles,
      video,
      handleMediaLoaded
    ));

    logo = p5.loadImage("/images/webp/logo.webp");
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
    p5.background(255);
    // video.hide(); // NEED TO FIX THE VIDEO

    // if (showIntroVideo) {
    //   p5.image(introVideo, 0, 0, p5.width, p5.height);
    // } else {
    for (let b of bubbles) {
      if (b.type === "video") {
        video.volume(0);
        video.loop();
      }
      b.show();
    }
    // }
  };

  let position = 0;

  function mouseWheel(event) {
    console.log(event);
    //move the square according to the vertical scroll amount
    // position += event.deltaY;
    // onScroll(event, bubbles);
    //uncomment to block page scrolling
    //return false;
  }

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
      <Sketch
        setup={setup}
        draw={draw}
        preload={preload}
        mouseWheel={mouseWheel}
      />
    </>
  );
}
