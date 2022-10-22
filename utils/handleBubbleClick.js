let isPlayingVideoSound = false;

export const handleBubbleClick = (p5, bubbles) => {
  for (let b of bubbles) {
    const bubbleClicked = b.clicked(p5.mouseX, p5.mouseY);
    if (bubbleClicked) {
      if (b.url) {
        window.location.pathname = `/products/${b.url}`;
      }
    }
  }
};
