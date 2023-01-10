const releaseCanvas = () => {
  const canvas = document.querySelector("canvas");
  canvas.width = 1;
  canvas.height = 1;
  const ctx = canvas.getContext("2d");
  ctx && ctx.clearRect(0, 0, 1, 1);
};

export const handleBubbleClick = (p5, bubbles, router) => {
  for (let b of bubbles) {
    const bubbleClicked = b.clicked(p5.mouseX, p5.mouseY);
    if (bubbleClicked) {
      if (b.url) {
        releaseCanvas();
        router.replace(b.url).then(() => router.reload());
      }
    }
  }
};
