import React from "react";

const H1Styles = styled.h1`
  font-size: 48px;
  text-transform: uppercase;
  line-height: 1;
  width: 100px;
  @font-face {
    font-family: FreeSaneBold;
    src: url("fonts/free-sans-bold.otf") format("opentype");
  }
  font-family: FreeSaneBold;
  letter-spacing: 5px;
  margin-bottom: 24px;
`;

const H5Styles = styled.h5`
  font-size: 16px;
  letter-spacing: 2px;
  text-transform: uppercase;
  @font-face {
    font-family: FreeSaneBold;
    src: url("fonts/free-sans-bold.otf") format("opentype");
  }
  font-family: FreeSaneBold;
`;

const BodyStyles = styled.p`
  font-size: 16px;
  margin-bottom: 16px;
`;

const FeatureStyles = styled.p`
  font-size: 16px;
  text-transform: uppercase;
`;

export const H1 = ({ text }) => <H1Styles>{text}</H1Styles>;
export const H5 = ({ text }) => <H5Styles>{text}</H5Styles>;
export const Body = ({ text }) => <BodyStyles>{text}</BodyStyles>;
export const Feature = ({ text }) => <FeatureStyles>{text}</FeatureStyles>;
