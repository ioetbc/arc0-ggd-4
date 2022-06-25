import React, { useEffect, useState } from "react";
import Router from "next/router";
import styled from "styled-components";

const BgImage = styled.div`
  box-sizing: border-box;
  height: 100vh; /* Fallback for browsers that do not support Custom Properties */
  height: calc(var(--vh, 1vh) * 100);
  border: 16px solid white;
  background-image: ${(props) =>
    props.isHovering
      ? "url(/images/landing-page/landing-bg-dark.webp)"
      : "url(/images/landing-page/landing-bg.webp)"};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  transition: ${(props) =>
    props.isHovering ? "transform 60s" : "transform 0"};
  transition: filter 0.5s ease;
  filter: ${(props) => (props.removeFilter ? "invert(0)" : "invert(90%)")};
  opacity: ${(props) => (props.hideBg ? 0 : 1)};
  transition-delay: ${(props) => (props.isHovering ? "1s" : "0")};
  transform-origin: center;
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
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
    document.querySelector("body").style.overflow = "hidden";

    setTimeout(() => {
      setRemoveFilter(true);
    }, 300);

    return () => {
      console.log("cleaning up");
      document.querySelector("body").style.overflow = "initial";
    };
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
    </>
  );
};

export default LandingPage;
