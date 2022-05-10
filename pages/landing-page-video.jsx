import Router from "next/router";
import React from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";

const VideoStyles = styled.div`
  position: relative;
  padding-top: 58.25%; /* Player ratio: 100 / (1280 / 720) */
  overflow: hidden;
  background: black;
  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
  }
`;

const LandingPage = () => {
  return (
    <VideoStyles>
      <video
        autoPlay
        muted
        className="react-player"
        width={"100%"}
        height={"100vh"}
        src="/videos/intro-video.mp4"
      ></video>
    </VideoStyles>
  );
};

export default LandingPage;
