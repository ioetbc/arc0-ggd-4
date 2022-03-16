import { products } from "../database/products";

export const preloadCanvas = (p5) => {
  let images = [];
  let song;
  let video;

  for (let i = 0; i < products.length; i++) {
    products[i].src = p5.loadImage(products[i].src);
    images.push(products[i]);
  }
  p5.soundFormats("mp3");
  song = p5.loadSound("/sounds/orgasm-slaps.mp3");

  p5.noCanvas();
  video = p5.createVideo("/videos/snoop.mp4");

  return {
    images,
    song,
    video,
  };
};
