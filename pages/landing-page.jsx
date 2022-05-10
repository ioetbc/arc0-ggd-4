import React, { useEffect, useState } from "react";
import Router from "next/router";
import styled from "styled-components";

const Container = styled.div`
  /* padding: 16px; */
  box-sizing: border-box;
`;

const BgImage = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url("/images/landing-page/landing-bg.webp");
  background-position: center;
  transition: all 0.5s ease;
  filter: ${(props) => (props.removeFilter ? "invert(0)" : "invert(100%)")};
  opacity: ${(props) => (props.hideBg ? 0 : 1)};
`;

const Door = styled.div`
  .door {
    position: absolute;
    width: 16vh;
    top: 56%;
    height: 32vh;
    left: 50%;
    transform: translateX(-50%);
    cursor: cell;
    filter: invert(100%);
    transition: filter 0.5s ease;
    &:hover {
      filter: ${(props) => (props.hideBg ? "invert(100%)" : "invert(0)")};
    }
  }
`;

const LandingPage = () => {
  const [removeFilter, setRemoveFilter] = useState(false);
  const [hideBg, setHideBG] = useState(false);
  const handleDoorOpen = () => {
    setHideBG(true);
    // setTimeout(() => {
    Router.push("landing-page-video");
    // }, 2000);
  };

  useEffect(() => {
    setTimeout(() => {
      setRemoveFilter(true);
    }, 100);
  }, []);

  return (
    <Container>
      <BgImage removeFilter={removeFilter} hideBg={hideBg}></BgImage>
      <Door hideBg={hideBg}>
        <div className="door" onClick={handleDoorOpen}></div>
      </Door>
    </Container>
  );
};

export default LandingPage;
