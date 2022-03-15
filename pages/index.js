import React, { useEffect } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { products } from "../database/products";

const Sketch = dynamic(() => import("react-p5"), { ssr: false });

let vx = 0;
let vy = 0;

let bubbles = [];
// let unicorn;

let kittens = products;

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    window.addEventListener("wheel", onScroll);

    const hammer = new Hammer(document.body, { preventDefault: true });

    hammer.get("pan").set({
      direction: Hammer.DIRECTION_ALL,
    });

    hammer.on("pan", (event) => {
      for (let b of bubbles) {
        b.swiped(event);
      }
    });

    return () => {
      hammer.destroy();
      window.removeEventListener("whell", onScroll);
    };
  }, []);

  const preload = (p5) => {
    console.log("preload");
    for (let i = 0; i < kittens.length; i++) {
      kittens[i].src = p5.loadImage(kittens[i].src);
    }
  };

  const onScroll = (event) => {
    for (let b of bubbles) {
      b.x += (event.deltaX / 10) * b.parallex;
      b.y += (event.deltaY / 10) * b.parallex;
    }
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
    }
    // let unicornKitten = p5.random(kittens);

    // unicorn = new Bubble(
    //   400,
    //   200,
    //   100,
    //   100,
    //   unicornKitten.src,
    //   unicornKitten.parallex,
    //   unicornKitten.id,
    //   p5,
    //   unicornKitten.url
    // );

    canvas.mousePressed(() => {
      for (let b of bubbles) {
        b.clicked(p5.mouseX, p5.mouseY);
      }
    });
  };

  const draw = (p5) => {
    p5.background(0);
    // unicorn.x = p5.mouseX;
    // unicorn.y = p5.mouseY;
    // unicorn.show();
    // unicorn.move();
    for (let b of bubbles) {
      b.show();
      // vx = p5.constrain(vx, 0, 3357);
      // vy = p5.constrain(vy, 0, 2518);
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
      // this.x = this.x + this.p5.random(-5, 5);
      // this.y = this.y + this.p5.random(-5, 5);``
    }

    show() {
      this.p5.image(this.kitten, this.x, this.y, this.width, this.height);
      this.x += vx;
      this.y += vy;

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
      console.log("event.velocityY", event.velocityY * kittens.length);
      console.log("kittens.length", kittens.length);
      vx += event.velocityX * this.parallex;
      // vx += event.velocityX * 10;
      vy += event.velocityY * this.parallex;
      // vy += event.velocityY * 10;
    };
  }

  return <Sketch setup={setup} draw={draw} preload={preload} />;
}
