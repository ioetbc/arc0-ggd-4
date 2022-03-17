export const createButton = ({ p5, label, position, skipButton }) => {
  skipButton = p5.createButton(label);
  skipButton.position(position.x, position.y);
  skipButton.style("background-color", "#ff0000");
  return skipButton;
};
