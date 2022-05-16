import React, { useEffect, useState } from "react";
import Router from "next/router";
import styled from "styled-components";

const BgImage = styled.div`
  box-sizing: border-box;
  height: calc(100vh - 32px);
  margin: 16px;
  background-image: ${(props) =>
    props.isHovering
      ? "url(/images/landing-page/landing-bg-dark.webp)"
      : "url(/images/landing-page/landing-bg.webp)"};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  transition: filter 0.5s ease;
  opacity: ${(props) => (props.hideBg ? 0 : 1)};
`;

const Door = styled.div`
  .door {
    cursor: cell;
    width: 30vw;
    @media (min-width: 768px) {
      width: 20vw;
    }
    @media (min-width: 1400px) {
      width: 10vw;
    }
    height: 38vh;
    top: 55vh;
    left: 50%;
    transform: translateX(-50%);
    position: absolute;
    background-repeat: no-repeat;
    background-size: contain;
    transition: background-image 0.5s ease;
  }
`;

const LandingPage = () => {
  const [removeFilter, setRemoveFilter] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [hideBg, setHideBG] = useState(false);
  const handleDoorOpen = () => {
    setHideBG(true);
    Router.push("libidinal-iconography");
  };

  useEffect(() => {
    setTimeout(() => {
      setRemoveFilter(true);
    }, 100);
  }, []);

  return (
    <>
      <BgImage
        isHovering={isHovering}
        removeFilter={removeFilter}
        hideBg={hideBg}
      ></BgImage>
      <Door hideBg={hideBg}>
        <div
          className="door"
          onClick={handleDoorOpen}
          onMouseOver={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        ></div>
      </Door>
      <video src="/videos/intro-video.mp4" preload="metadata"></video>
    </>
  );
};

export default LandingPage;
