import Bubble from "../utils/Bubble";

export const SetupCanvas = (p5, canvasParentRef, images, video, router) => {
  let bubbles = [];
  const canvas = p5
    .createCanvas(window.innerWidth, window.innerHeight)
    .parent(canvasParentRef);

  for (let i = 0; i < images.length; i++) {
    const { x, y, width, height, src, parallex, id, url = false } = images[i];

    let bubble = new Bubble(x, y, width, height, src, parallex, id, p5, url);
    bubbles.push(bubble);

    video.volume(0);
    video.loop();
    video.hide();

    let videoBubble = new Bubble(1200, 300, 200, 300, video, 2, 2, p5, false);
    bubbles.push(videoBubble);
  }

  canvas.mousePressed(() => {
    for (let b of bubbles) {
      const bubbleClicked = b.clicked(p5.mouseX, p5.mouseY);
      console.log("bubble cliocked", bubbleClicked);
      if (!bubbleClicked) return;
      if (b.url) {
        router.push(this.url);
      }
      if (b.isVideo) {
        video.volume(1);
      }
    }
  });

  return bubbles;
};
