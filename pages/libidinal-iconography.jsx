import React, { useState, useEffect } from "react";
import Router from "next/router";
import styled from "styled-components";
import { IconContext } from "react-icons";
import { BiVolume, BiVolumeMute } from "react-icons/bi";

import { Button } from "../components/Button";

const VideoStyles = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: black;
  height: 100vh;

  @media screen and (min-width: "768px") {
    padding-top: 56.25%; /* Player ratio: 100 / (1280 / 720) */
  }
  video {
    width: 100%;
    height: auto;
    max-height: 900px;
    @media screen and (min-width: "768px") {
      height: 100vh;
      position: absolute;
      top: 0;
      left: 0;
    }
  }
  .mute-icon {
    position: absolute;
    top: 16px;
    right: 16px;
    cursor: pointer;
  }
  .skip-button {
    border-color: white;
    color: white;
    position: absolute;
    bottom: 16px;
    right: 16px;
  }
`;

const LandingPage = () => {
  const [mute, setMute] = useState(true);
  const [showButton, setShowButton] = useState(true);

  const handleVideoVolume = () => {
    setMute(!mute);
  };

  const handleSkipButton = () => {
    Router.push("/world");
  };
  return (
    <VideoStyles>
      <video
        playsinline
        autoPlay
        muted={mute}
        className="react-player"
        width={"100%"}
        height={"100vh"}
        src="/videos/intro-video.mp4"
        preload="metadata"
        id="video-init"
        onEnded={(hmm) => {
          setShowButton(true);
          hmm.target.play();
        }}
      ></video>
      <IconContext.Provider value={{ color: "white", size: 30 }}>
        <div>
          {mute ? (
            <BiVolume onClick={handleVideoVolume} className="mute-icon" />
          ) : (
            <BiVolumeMute onClick={handleVideoVolume} className="mute-icon" />
          )}
        </div>
      </IconContext.Provider>
      {showButton && (
        <Button
          onClick={handleSkipButton}
          className="skip-button"
          text="skip"
        />
      )}
    </VideoStyles>
  );
};

export default LandingPage;
