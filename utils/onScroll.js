export const onScroll = (event, bubbles) => {
  for (let b of bubbles) {
    b.x += (event.deltaX / 10) * b.parallex;
    b.y += (event.deltaY / 10) * b.parallex;
  }
};

export const onSwipe = (event, bubbles) => {
  for (let b of bubbles) {
    b.x += event.velocityX * b.parallex * 5;
    b.y += event.velocityY * b.parallex * 5;
  }
};
