import React, {useState, useEffect} from "react";
import Router from "next/router";
import styled from "styled-components";
import {IconContext} from "react-icons";
import {BiVolume, BiVolumeMute} from "react-icons/bi";

import {Button} from "../components/Button";

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
  .mute-button {
    border-color: white;
    color: white;
    position: absolute;
    top: 16px;
    right: 16px;
    cursor: pointer;
  }
  .skip-button {
    width: 140px;
    border-color: white;
    color: white;
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
  }
`;
const fetchRequests = [];

const LandingPage = () => {
  const [mute, setMute] = useState(true);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    return () => {
      document.querySelector("body").style.overflow = "initial";
    };
  }, []);

  const handleVideoVolume = () => {
    setMute(!mute);
  };

  const handleSkipButton = () => {
    Router.push("/world");
  };
  return (
    <VideoStyles>
      <video
        playsInline
        autoPlay
        muted={mute}
        className="react-player"
        width={"100%"}
        height={"100vh"}
        src="/videos/intro-video.mp4"
        preload="metadata"
        id="video-element"
        onEnded={(video) => {
          setShowButton(true);
          video.target.play();
        }}
      ></video>
      {/* <IconContext.Provider value={{ color: "white", size: 30 }}>
        <div>
          {mute ? (
            <BiVolume onClick={handleVideoVolume} className="mute-icon" />
          ) : (
            <BiVolumeMute onClick={handleVideoVolume} className="mute-icon" />
          )}
        </div>
      </IconContext.Provider> */}

      <Button
        className="mute-button"
        onClick={handleVideoVolume}
        text={mute ? "unmute" : "mute"}
      />

      {showButton && (
        <Button
          onClick={handleSkipButton}
          className="skip-button"
          text="enter"
        />
      )}
    </VideoStyles>
  );
};

export default LandingPage;
