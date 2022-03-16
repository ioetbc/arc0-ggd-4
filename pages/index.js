import React, { useEffect } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import Script from "next/script";
import { products } from "../database/products";

const Sketch = dynamic(
  () =>
    import("react-p5").then((mod) => {
      require("p5/lib/addons/p5.sound");
      return mod.default;
    }),
  { ssr: false }
);

let vx = 0;
let vy = 0;

let bubbles = [];

let kittens = products;

export default function Home() {
  const router = useRouter();
  let hammer;
  let song;
  let video;
  let videoSrc = "/videos/snoop.mp4";

  useEffect(() => {
    window.addEventListener("wheel", onScroll);
    return () => {
      hammer.destroy();
      window.removeEventListener("wheel", onScroll);
    };
  }, []);

  const preload = (p5) => {
    for (let i = 0; i < kittens.length; i++) {
      kittens[i].src = p5.loadImage(kittens[i].src);
    }
    p5.soundFormats("mp3");
    // song = p5.loadSound("/sounds/orgasm-slaps.mp3");
    p5.noCanvas();
    video = p5.createVideo(videoSrc);
    // video.size(600, 900);
    // video.hide();
  };

  const setup = (p5, canvasParentRef) => {
    const canvas = p5
      .createCanvas(window.innerWidth, window.innerHeight)
      .parent(canvasParentRef);

    for (let i = 0; i < kittens.length; i++) {
      const {
        x,
        y,
        width,
        height,
        src,
        parallex,
        id,
        url = false,
      } = kittens[i];
      let bubble = new Bubble(x, y, width, height, src, parallex, id, p5, url);
      bubbles.push(bubble);

      video.volume(0);
      video.loop();
      video.hide();

      let videoBubble = new Bubble(1200, 300, 200, 300, video, 0, 2, p5, false);
      bubbles.push(videoBubble);
    }

    canvas.mousePressed(() => {
      for (let b of bubbles) {
        b.clicked(p5.mouseX, p5.mouseY);
      }
    });
  };

  const soundIsPlaying = false;

  const draw = (p5) => {
    p5.background(0);
    for (let b of bubbles) {
      b.show();
      if (b.mouseOverProduct(p5.mouseX, p5.mouseY) && !soundIsPlaying) {
        // song.play();
        soundIsPlaying = true;
      }
    }
  };

  const onScroll = (event) => {
    for (let b of bubbles) {
      b.x += (event.deltaX / 10) * b.parallex;
      b.y += (event.deltaY / 10) * b.parallex;
    }
  };

  class Bubble {
    constructor(x, y, width, height, img, parallex, id, p5, url = false) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.brightness = 0;
      this.kitten = img;
      this.parallex = parallex;
      this.id = id;
      this.p5 = p5;
      this.url = url;
    }

    move() {
      this.x = this.x + this.p5.random(-5, 5);
      this.y = this.y + this.p5.random(-5, 5);
    }

    isProduct() {
      return this.url;
    }

    show() {
      this.p5.image(this.kitten, this.x, this.y, this.width, this.height);
      this.x += vx;
      this.y += vy;

      if (this.url) {
        this.move();
      }

      vx *= 0.95;
      vy *= 0.95;
    }

    contains(mouseX, mouseY) {
      let distance = dist(mouseX, mouseY, this.x, this.y);
      return distance < this.width;
    }

    changeColor(color) {
      this.brightness = color;
    }

    intersects(otherBubble) {
      let distance = dist(this.x, this.y, otherBubble.x, otherBubble.y);
      return distance < this.width + otherBubble.width;
    }

    mouseOverProduct(mouseX, mouseY) {
      return (
        mouseX > this.x &&
        mouseX < this.x + this.width &&
        mouseY > this.y &&
        mouseY < this.y + this.height &&
        this.url
      );
    }

    clicked(mouseX, mouseY) {
      if (
        mouseX > this.x &&
        mouseX < this.x + this.width &&
        mouseY > this.y &&
        mouseY < this.y + this.height &&
        this.url
      ) {
        router.push(this.url);
      }
    }

    swiped = (event) => {
      vx += event.velocityX * this.parallex;
      vy += event.velocityY * this.parallex;
    };
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
      <Sketch setup={setup} draw={draw} preload={preload} />
    </>
  );
}
