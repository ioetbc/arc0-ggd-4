import Bubble from "../utils/Bubble";

export const SetupCanvas = (p5, canvasParentRef, products, video, logo) => {
  let bubbles = [];
  const canvas = p5
    .createCanvas(window.innerWidth, window.innerHeight)
    .parent(canvasParentRef);

  // p5.image(logo, 100, 100, 100, 100);

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

    if (product.type === "video") {
      video.volume(0);
      video.loop();
      video.hide();
    }
  }

  let isPlayingVideoSound = false;
  canvas.mousePressed(() => {
    for (let b of bubbles) {
      const bubbleClicked = b.clicked(p5.mouseX, p5.mouseY);
      console.log("bubbleClicked");
      if (bubbleClicked) {
        console.log("CLCIEKD", b.type);
        if (b.url) {
          window.location.pathname = b.url;
        }
        if (b.type === "video") {
          console.log("VOLUME");
          video.volume(isPlayingVideoSound ? 0 : 1);
          isPlayingVideoSound = !isPlayingVideoSound;
        }
      }
    }
  });

  return {
    canvas,
    bubbles,
    logo,
  };
};
