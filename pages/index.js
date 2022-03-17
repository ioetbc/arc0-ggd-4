import React, { useEffect } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import Script from "next/script";
import { onScroll } from "../utils/onScroll";
import { products } from "../database/products";
import Bubble from "../utils/Bubble";

import { preloadCanvas } from "../utils/preloadCanvas";
import { SetupCanvas } from "../utils/setupCanvas";
import { drawCanvas } from "../utils/drawCanvas";

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
  let song;
  let video;
  let logo;
  let canvas;
  let introVideo;
  let showIntroVideo = true;
  let hasIntroVideoLoaded = false;
  let showSkipButton = false;
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
      introVideoLoaded(p5)
    );
  };

  const introVideoLoaded = (p5) => {
    introVideo.volume(0);
    introVideo.loop();
    introVideo.hide();
    // hasIntroVideoLoaded = true;

    for (let p of products) {
      if (p.type === "video") {
        video = p5.createVideo(p.src, () => mediaLoadedFunc(p5));
      } else {
        p.src = p5.loadImage(p.src, () => mediaLoadedFunc(p5));
      }
    }
    logo = p5.loadImage("/images/webp/logo.webp");
    p5.soundFormats("mp3");
    song = p5.loadSound("/sounds/orgasm-slaps.mp3");

    for (let product of products) {
      const {
        x,
        y,
        width,
        height,
        src,
        parallex,
        id,
        url = false,
        type,
      } = product;

      const dynamicSrc = type === "video" ? video : src;

      let bubble = new Bubble(
        x,
        y,
        width,
        height,
        dynamicSrc,
        parallex,
        id,
        p5,
        url,
        type
      );

      bubbles.push(bubble);
    }
  };

  // SETUP IS ONLY CALLED ONCE ALL THE MEDIA HAS LOADED
  const mediaLoadedFunc = (p5) => {
    mediaLoaded++;
    console.log("mediaLoaded", mediaLoaded);
    if (mediaLoaded === products.length) {
      console.log("show the skip button");
      skipButton = p5.createButton("skip intro video");
      skipButton.position(0, 0);
      skipButton.style("background-color", "#ff0000");
      skipButton.mousePressed(() => (showIntroVideo = false));
    }
  };

  const setup = (p5, canvasParentRef) => {
    canvas = p5
      .createCanvas(window.innerWidth, window.innerHeight)
      .parent(canvasParentRef);

    let isPlayingVideoSound = false;
    canvas.mousePressed(() => {
      for (let b of bubbles) {
        const bubbleClicked = b.clicked(p5.mouseX, p5.mouseY);
        if (bubbleClicked) {
          if (b.url) {
            window.location.pathname = b.url;
          }
          if (b.type === "video") {
            video.volume(isPlayingVideoSound ? 0 : 1);
            isPlayingVideoSound = !isPlayingVideoSound;
          }
        }
      }
    });
  };

  const draw = (p5) => {
    p5.background(255);

    if (showIntroVideo) {
      p5.image(introVideo, 0, 0, p5.width, p5.height);
    } else {
      for (let b of bubbles) {
        if (b.type === "video") {
          video.volume(0);
          video.loop();
          video.hide();
        }
        b.show();
        // if (b.mouseOver(p5.mouseX, p5.mouseY)) {
        //   document.querySelector("canvas").style.cursor = "pointer";
        // } else {
        //   document.querySelector("canvas").style.cursor = "default";
        // }
      }
    }

    // TODO the click event is not working correctly (its really low down) becuase of the logo
    // const logoWidth = 75;
    // const logoHeight = 75;
    // const logoOffsetX = 24;
    // const logoOffsetY = 24;
    // p5.translate(p5.width - logoWidth + logoOffsetX, logoHeight - logoOffsetY);
    // p5.rotate(p5.mouseY / 200);
    // p5.imageMode(p5.CENTER);
    // p5.image(logo, 0, 0, logoWidth, logoHeight);
  };

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
