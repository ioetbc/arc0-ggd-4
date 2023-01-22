export const handleBubbleHover = (x, y, bubbles, p5) => {
  for (let b of bubbles) {
    const bubbleHovered = b.mouseOver(x, y);
    if (b.url) {
      if (bubbleHovered) {
        p5.cursor("crosshair");
        console.log("bubbleHovered", bubbleHovered);
      }
      //   console.log("bubble hover");
    } else {
      p5.cursor("default");
    }
  }
};
