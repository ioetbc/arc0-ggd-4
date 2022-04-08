import Bubble from "../utils/Bubble";

export const createBubbles = (
  p5,
  products,
  bubbles,
  video,
  handleMediaLoaded
) => {
  for (let p of products) {
    if (p.type === "video") {
      // video = p5.createVideo(p.src, () => handleMediaLoaded(p5));
    } else {
      p.src = p5.loadImage(p.src, () => handleMediaLoaded(p5));
      let bubble = new Bubble(
        p?.x,
        p?.y,
        p?.width,
        p?.height,
        p?.type === "video" ? video : p?.src,
        p?.parallex,
        p?.id,
        p5,
        p?.url,
        p?.type
      );
      bubbles.push(bubble);
    }
  }

  return {
    video,
    bubbles,
  };
};
