import Router from "next/router";
import React from "react";
import styled from "styled-components";

const Door = styled.div`
  .door {
    position: absolute;
    background-color: red;
    width: 16vh;
    left: 50%;
    transform: translateX(-50%);
    top: 54%;
    height: 32vh;
    opacity: 0.6;
  }
`;

const LandingPage = () => {
  const handleDoorOpen = () => {
    console.log("clicked");
    Router.push("landing-page-video");
  };
  return (
    <>
      <div className='absolute bg-cover md:bg-cover bg-center bg-no-repeat bg-size h-screen w-screen bg-[url("/images/landing-page/landing-bg.png")] md:bg-[url("/images/landing-page/landing-bg.png")]'></div>
      <Door>
        <div className="door" onClick={handleDoorOpen}></div>
      </Door>
    </>
  );
};

export default LandingPage;
