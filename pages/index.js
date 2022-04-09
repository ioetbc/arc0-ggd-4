import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import Script from "next/script";
import yn from "yn";
import io, { Socket } from "socket.io-client";
import { uuid } from "uuidv4";

import { onScroll } from "../utils/onScroll";
import { products } from "../database/products";
import { handleBubbleClick } from "../utils/handleBubbleClick";
import { createBubbles } from "../utils/createBubbles";

// function useSocket(url) {
//   // const [socket, setSocket] = useState(null);
//   let socketio = null;
//   console.log("going to call the server");
//   useEffect(() => {
//     fetch(url).finally(() => {
//       socketio = io();
//       // setSocket(socketio);
//       socketio.on("connect", () => {
//         console.log("connect");
//         socketio.emit("hello");
//       });

//       return socketio;
//     });
//   }, []);
//   console.log("socketio", socketio);
//   return socketio;
// }

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

  const randomNameGenerator = ["Will Cole", "Gordon Hack", "Simao Romulado"];
  const randomAvatarGenerator = [
    "https://images.generated.photos/B8uJG-kxy1tOBLP7B13ALhVtr-nc8CTHS70xjAe_N-I/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LmNvbmQvODNhYTZk/MDMtMTE0NS00NDgx/LWE5OWItMzExMDEw/YTNlMWFhLmpwZw.jpg",
    "https://images.generated.photos/bIzwxi6ZOMfLhPsjbUDmi9d9FUctR3e40tsdMCGjbWs/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LmNvbmQvMGEwNDA5/MzctM2E5NS00ZjMx/LWIyMDctMWY0MjE4/ZjVjODNjLmpwZw.jpg",
    "https://images.generated.photos/kvHI0jOnvpminaGX2hKZLt6qIeEZTj1Yr5Sceq6R5TQ/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LmNvbmQvNjU1YmVj/ZDUtZTBhZS00MDk0/LTk2YjgtNWM2NjU3/Y2FhZjBjLmpwZw.jpg",
  ];
  const randomLocationGenerator = ["London", "Berlin", "Amsterdam"];

  const globalUser = {
    name: randomNameGenerator[
      Math.floor(Math.random() * randomNameGenerator.length)
    ],
    avatar:
      randomAvatarGenerator[
        Math.floor(Math.random() * randomAvatarGenerator.length)
      ],
    location: "London",
  };

  const avatarId = uuid();

  const avatarUsers = [];

  const socket = io("https://arc-ggd-api.herokuapp.com");
  function mouseMoved(event) {
    if (socket) {
      socket.emit("chat message", {
        avatarId,
        x: event.mouseX,
        y: event.mouseY,
      });
    }
  }

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
    avatar = p5.loadImage(
      randomAvatarGenerator[
        Math.floor(Math.random() * randomAvatarGenerator.length)
      ]
    );
    // globalAvatar = p5.loadImage(user.avatar);
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
  let loadedAvatar = false;
  let avatarMessage = [];
  const setup = (p5, canvasParentRef) => {
    showIntroVideo = yn(localStorage.getItem("showIntroVideo"));
    canvas = p5
      .createCanvas(window.innerWidth, window.innerHeight)
      .parent(canvasParentRef);

    canvas.mousePressed(() => {
      handleBubbleClick(p5, bubbles, video);
    });

    if (socket) {
      socket.on("chat message", function ({ msg }) {
        const avatarIndex = avatarUsers.findIndex(
          (user) => user.avatarId === msg.avatarId
        );

        if (avatarIndex >= 0) {
          avatarUsers[avatarIndex].x = msg.x;
          avatarUsers[avatarIndex].y = msg.y;
        } else {
          avatarUsers.push({ ...msg });
        }
      });
    }
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
        p5.text(
          `name: ${user.name} location: ${user.location}`,
          user.x,
          user.y + 120,
          80,
          100
        );
      }
    }
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
        mouseMoved={mouseMoved}
      />
    </>
  );
}
