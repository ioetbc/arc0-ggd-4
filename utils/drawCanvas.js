export const drawCanvas = (p5, bubbles) => {
  p5.background(0);
  for (let b of bubbles) {
    b.show();
    // if (b.mouseOverProduct(p5.mouseX, p5.mouseY) && !soundIsPlaying) {
    // song.play();
    //   soundIsPlaying = true;
    // }
  }
};
