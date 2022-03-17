import { products } from "../database/products";

export const preloadCanvas = (p5) => {
  let song;
  let video;
  let logo;

  for (let p of products) {
    if (p.type === "video") {
      video = p5.createVideo(p.src);
    } else {
      p.src = p5.loadImage(p.src);
    }
  }

  logo = p5.loadImage("/images/webp/logo.webp");
  p5.soundFormats("mp3");
  song = p5.loadSound("/sounds/orgasm-slaps.mp3");

  return {
    products,
    song,
    video,
    logo,
  };
};
