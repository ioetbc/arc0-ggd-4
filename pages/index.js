import React, { useEffect } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

const Sketch = dynamic(() => import("react-p5"), { ssr: false });

let vx = 0;
let vy = 0;

let bubbles = [];
let unicorn;

let kittens = [
  {
    id: "backg2",
    src: "/images/5/backg2.jpg",
    grid: 5,
    x: -500,
    y: -500,
    parallex: 1.8,
    width: 3357,
    height: 2518,
  },
  {
    id: "merz",
    src: "/images/5/merz.png",
    grid: 5,
    x: 700,
    y: 1050,
    parallex: 2,
    width: 795,
    height: 134,
  },
  {
    id: "verboten",
    src: "/images/5/verboten.png",
    grid: 5,
    x: -200,
    y: 300,
    parallex: 1.5,
    width: 1842,
    height: 702,
  },
  {
    id: "tv",
    src: "/images/5/tv.png",
    grid: 5,
    x: 750,
    y: 600,
    parallex: 2.2,
    width: 556,
    height: 111,
  },
  {
    id: "tz",
    src: "/images/5/tz.png",
    grid: 5,
    x: 800,
    y: 700,
    parallex: 2.5,
    width: 255,
    height: 302,
  },
  {
    id: "redwhite",
    src: "/images/5/redwhite.png",
    grid: 5,
    x: 500,
    y: 100,
    parallex: 2.8,
    width: 612,
    height: 196,
  },
  {
    id: "flake1",
    src: "/images/5/flake1.png",
    grid: 5,
    x: 0,
    y: 100,
    parallex: 2,
    width: 393,
    height: 557,
  },
  {
    id: "reduziert",
    src: "/images/5/reduziert.png",
    grid: 5,
    x: 1050,
    y: 100,
    parallex: 2.5,
    width: 365,
    height: 200,
  },
  {
    id: "solar",
    src: "/images/5/solar.png",
    grid: 5,
    x: 900,
    y: 100,
    parallex: 3.3,
    width: 1280,
    height: 772,
  },
  {
    id: "cba",
    src: "/images/5/cba.png",
    grid: 5,
    x: 400,
    y: 950,
    parallex: 2.2,
    width: 323,
    height: 463,
  },
  {
    id: "affitasi2",
    src: "/images/5/affitasi2.png",
    grid: 5,
    x: 1450,
    y: 500,
    parallex: 3,
    width: 617,
    height: 394,
  },
  {
    id: "flake2",
    src: "/images/5/flake2.png",
    grid: 5,
    x: 300,
    y: 500,
    parallex: 3.6,
    width: 519,
    height: 357,
  },
  {
    id: "plank",
    src: "/images/5/plank.png",
    grid: 5,
    x: -100,
    y: 50,
    parallex: 3.3,
    width: 1074,
    height: 880,
  },
  {
    id: "wax",
    src: "/images/5/wax.png",
    grid: 5,
    x: 300,
    y: 300,
    parallex: 3.5,
    width: 351,
    height: 613,
  },
  {
    id: "greengraf",
    src: "/images/5/greengraf.png",
    grid: 5,
    x: -100,
    y: -400,
    parallex: 3.8,
    width: 1064,
    height: 1276,
  },
  {
    id: "samstag",
    src: "/images/5/samstag.png",
    grid: 5,
    x: 1400,
    y: 890,
    parallex: 2.8,
    width: 194,
    height: 221,
  },
  {
    id: "affitasi1",
    src: "/images/5/affitasi1.png",
    grid: 5,
    x: -150,
    y: 700,
    parallex: 3,
    width: 570,
    height: 381,
  },
  {
    id: "montag",
    src: "/images/5/montag.png",
    grid: 5,
    x: -50,
    y: 870,
    parallex: 3.5,
    width: 194,
    height: 221,
  },
  {
    id: "yellowgraf",
    src: "/images/5/yellowgraf.png",
    grid: 5,
    x: -320,
    y: 800,
    parallex: 4,
    width: 976,
    height: 910,
  },

  {
    id: "purplegraff",
    src: "/images/5/purplegraff.png",
    grid: 5,
    x: 920,
    y: 600,
    parallex: 3.4,
    width: 178,
    height: 978,
  },
  {
    id: "redgraff",
    src: "/images/5/redgraff.png",
    grid: 5,
    x: 1120,
    y: 630,
    parallex: 3.6,
    width: 549,
    height: 398,
  },
  {
    id: "flake3",
    src: "/images/5/flake3.png",
    grid: 5,
    x: 940,
    y: 620,
    parallex: 4,
    width: 552,
    height: 442,
  },
  {
    id: "basic-tshirt",
    src: "/images/5/placeholder.jpeg",
    url: "/basic-tshirt",
    grid: 5,
    x: 500,
    y: 500,
    parallex: 4,
    width: 412,
    height: 550,
  },
];

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const hammer = new Hammer(document.body, { preventDefault: true });
    hammer.get("pan").set({
      direction: Hammer.DIRECTION_ALL,
    });

    hammer.on("pan", (event) => {
      for (let b of bubbles) {
        b.swiped(event);
      }
    });

    window.addEventListener("wheel", (e) => {
      for (let b of bubbles) {
        b.x += (e.deltaX / 10) * b.parallex;
        b.y += (e.deltaY / 10) * b.parallex;
      }
    });
  }, []);

  const preload = (p5) => {
    for (let i = 0; i < kittens.length; i++) {
      kittens[i].src = p5.loadImage(kittens[i].src, (img) =>
        console.log("img loaded", img)
      );
    }
  };

  const setup = (p5, canvasParentRef) => {
    const canvas = p5
      .createCanvas(window.innerWidth, window.innerHeight)
      .parent(canvasParentRef);

    canvas.mousePressed((event) => {
      for (let b of bubbles) {
        b.clicked(p5.mouseX, p5.mouseY);
      }
    });

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
    let unicornKitten = p5.random(kittens);

    unicorn = new Bubble(
      400,
      200,
      100,
      100,
      unicornKitten.src,
      unicornKitten.parallex,
      unicornKitten.id,
      p5,
      unicornKitten.url
    );
  };

  const draw = (p5) => {
    p5.background(0);
    unicorn.x = p5.mouseX;
    unicorn.y = p5.mouseY;
    unicorn.show();
    unicorn.move();
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
      this.x = this.x + this.p5.random(-5, 5);
      this.y = this.y + this.p5.random(-5, 5);
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
        console.log("image clickwed", this.url);
        router.push(this.url);
      }
    }
    swiped(event) {
      vx += event.velocityX * 2 * this.parallex;
      vy += event.velocityY * 2 * this.parallex;
    }
  }

  return <Sketch setup={setup} draw={draw} preload={preload} />;
}
