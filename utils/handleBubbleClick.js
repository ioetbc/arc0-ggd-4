let isPlayingVideoSound = false;

export const handleBubbleClick = (p5, bubbles, video) => {
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
};
