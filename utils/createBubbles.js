import Bubble from "../utils/Bubble";

export const createBubbles = (p5, products, bubbles) => {
  const isMobile = p5.windowWidth < 600;

  for (let p of products) {
    p.src = p5.loadImage(p.src);

    const x = isMobile ? p?.x / 2 : p?.x;
    const y = isMobile ? p?.y / 2 : p?.y;
    const width = isMobile ? p?.width / 2 : p?.width;
    const height = isMobile ? p?.height / 2 : p?.height;

    const bubble = new Bubble(
      x,
      y,
      width,
      height,
      p?.src,
      p?.parallex,
      p?.id,
      p5,
      p?.url,
      p?.type
    );
    bubbles.push(bubble);
  }

  return {
    bubbles,
  };
};
