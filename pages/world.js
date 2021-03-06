import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import Script from "next/script";
import yn from "yn";
import io from "socket.io-client";
// import { uuid } from "uuidv4";
const { faker } = require("@faker-js/faker");

import { onScroll, onSwipe } from "../utils/onScroll";
import { products } from "../database/products";
import { handleBubbleClick } from "../utils/handleBubbleClick";
import { createBubbles } from "../utils/createBubbles";
import { NetworkLoading } from "../components/NetworkLoading";
import { Header } from "../components/Header";

const Sketch = dynamic(
  () =>
    import("react-p5").then((mod) => {
      // require("p5/lib/addons/p5.sound");
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
  let globalAvatar;
  let canvas;
  let introVideo;
  let showIntroVideo = true;
  let skipButton;
  let mediaLoaded = 0;
  let avatar;

  // const avatarId = uuid();

  const avatarUsers = [];
  const avatarFirstName = faker.name.findName();

  // const socket = io("https://arc-ggd-api.herokuapp.com");
  // function mouseMoved(event) {
  //   if (socket) {
  //     socket.emit("chat message", {
  //       avatarId,
  //       firstName: avatarFirstName,
  //       x: event.mouseX,
  //       y: event.mouseY,
  //     });
  //   }
  // }

  // USE MOUSEWHEEL INSTEAD OF JS WHEEL EVENT https://p5js.org/reference/#/p5/mouseWheel
  // SEE IF YOU CAN SCRAP HAMMER AND JUST USE MOUSEX AND MOUSEY SEEMS TO BE BUILT IN ALREADY
  useEffect(() => {
    window.addEventListener("wheel", (event) => onScroll(event, bubbles));

    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        fetchRequests.push(entry.name);
        inputEl.current.innerHTML += `${entry.name} <br>`;

        if (fetchRequests.length > products.length) {
          setTimeout(() => {
            inputEl.current.remove();
          }, 3000);
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

    // logo = p5.loadImage("/images/webp/logo.webp");
    avatar = p5.loadImage(faker.image.avatar());
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

    // if (socket) {
    //   socket.on("chat message", function ({ msg }) {
    //     const avatarIndex = avatarUsers.findIndex(
    //       (user) => user.avatarId === msg.avatarId
    //     );

    //     if (avatarIndex >= 0) {
    //       avatarUsers[avatarIndex].x = msg.x;
    //       avatarUsers[avatarIndex].y = msg.y;
    //     } else {
    //       avatarUsers.push({ ...msg });
    //     }
    //   });
    // }
  };

  const draw = (p5) => {
    p5.background(0);
    // NEED TO FIX THE VIDEO
    const allMedia = [...bubbles, { avatars: avatarUsers }];
    // video.hide();
    // if (showIntroVideo) {
    //   p5.image(introVideo, 0, 0, p5.width, p5.height);
    // } else {
    for (let b of bubbles) {
      // if (b.type === "video") {
      //   video.volume(0);
      //   video.loop();
      // }

      b.show();
    }

    for (let user of avatarUsers) {
      if (avatar) {
        p5.image(avatar, user.x, user.y, 100, 100);
        p5.text(`${user.firstName}`, user.x, user.y + 120, 200, 100);
      }
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

          // hammer.on("panend", (event) => {
          //   onSwipeEnd(event, bubbles);
          // });
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
      {/* {networkRequests.length !== products.length && (
        <NetworkLoading networkRequests={networkRequests} />
      )} */}
      <Sketch
        setup={setup}
        draw={draw}
        preload={preload}
        // mouseWheel={mouseWheel}
        // mouseMoved={mouseMoved}
      />
    </>
    // )}
  );
}
