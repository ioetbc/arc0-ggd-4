export const drawCanvas = (p5, bubbles, canvas, logo) => {
  p5.background(0);

  for (let b of bubbles) {
    b.show();
    // if (b.mouseOver(p5.mouseX, p5.mouseY)) {
    //   document.querySelector("canvas").style.cursor = "pointer";
    // } else {
    //   document.querySelector("canvas").style.cursor = "default";
    // }
  }

  const logoWidth = 75;
  const logoHeight = 75;
  const logoOffsetX = 24;
  const logoOffsetY = 24;
  // console.log("v", mouseWheelY);
  let mouseWheelY = 0;
  // canvas.mouseWheel((event) => {
  //   mouseWheelY += event.deltaY;
  //   // console.log("dwed", mouseWheelY);
  // });

  // TODO the click event is not working correctly (its really low down) becuase of the logo
  p5.translate(p5.width - logoWidth + logoOffsetX, logoHeight - logoOffsetY);
  p5.rotate(p5.mouseY / 200);
  p5.imageMode(p5.CENTER);
  p5.image(logo, 0, 0, logoWidth, logoHeight);
};
