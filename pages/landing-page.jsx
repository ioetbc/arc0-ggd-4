import React, { useEffect, useState } from "react";
import Router from "next/router";
import styled from "styled-components";

const BgImage = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url("/images/landing-page/landing-bg.png");
  background-position: center;
  transition: filter 0.5s ease;
  filter: ${(props) => (props.removeFilter ? "invert(0)" : "invert(100%)")};
`;

const Door = styled.div`
  .door {
    position: absolute;
    width: 16vh;
    left: 50%;
    transform: translateX(-50%);
    top: 56%;
    height: 32vh;
    opacity: 0.6;
  }
`;

const LandingPage = () => {
  const [removeFilter, setRemoveFilter] = useState(false);
  const handleDoorOpen = () => {
    Router.push("landing-page-video");
  };

  useEffect(() => {
    setTimeout(() => {
      setRemoveFilter(true);
    }, 1000);
  }, []);

  return (
    <>
      <BgImage removeFilter={removeFilter}></BgImage>
      <Door>
        <div className="door" onClick={handleDoorOpen}></div>
      </Door>
    </>
  );
};

export default LandingPage;
