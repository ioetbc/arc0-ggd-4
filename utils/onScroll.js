export const onScroll = (event, bubbles) => {
  for (let b of bubbles) {
    b.x += (event.deltaX / 10) * b.parallex;
    b.y += (event.deltaY / 10) * b.parallex;
  }
};

export const onSwipe = (event, bubbles) => {
  for (let b of bubbles) {
    b.x += event.velocityX * 10 * b.parallex;
    b.y += event.velocityY * 10 * b.parallex;
  }
};
