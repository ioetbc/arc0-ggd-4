import Image from "next/image";
import {useState} from "react";
import {useEffect} from "react";
import styled from "styled-components";
import {Menu} from "./Menu";

const Container = styled.div`
  z-index: 200;
  background: #35e9b0;
  transition-property: width, height;
  transition-duration: 0.2s;
  transition-timing-function: ease-out;
  transition-delay: ${(props) => (props.openMenu ? "0s" : "0.3s")};
  height: ${(props) => (props.openMenu ? "300px" : "70px")};
  width: ${(props) => (props.openMenu ? "calc(100% - 32px)" : "70px")};
  @media (min-width: 768px) {
    width: ${(props) => (props.openMenu ? "400px" : "70px")};
  }

  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  position: absolute;
  right: 16px;
  overflow: hidden;
  .logo {
    display: flex;
    position: absolute;
    right: 10px;
    top: 10px;
    width: 50px;
    transition: transform 0.7s ease-in-out;
    transform: ${(props) => (props.openMenu ? "rotate(180deg)" : "rotate(0)")};
  }
  .item {
    text-transform: uppercase;
    font-size: 24px;
  }
  .divider {
    transition-property: opacity;
    transition-duration: 0.2s;
    transition-timing-function: ease-out;
    transition-delay: ${(props) => (props.openMenu ? "0.3s" : "0s")};
    opacity: ${(props) => (props.openMenu ? 1 : 0)};
    margin-top: 100px;
    margin-left: 16px;
    border-top: 1px solid black;
    padding-top: 8px;
    width: 70%;
  }
`;

export const Logo = ({openMenu, handleOpenMenu, handleCloseMenu}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(
        navigator.userAgent || navigator.vendor || window.opera
      )
    ) {
      setIsMobile(true);
    }
  }, []);

  return (
    <Container
      openMenu={openMenu}
      onMouseEnter={isMobile && !openMenu ? () => null : handleOpenMenu}
      onMouseLeave={isMobile && openMenu ? () => null : handleCloseMenu}
    >
      <div
        className="logo"
        onClick={openMenu ? handleCloseMenu : handleOpenMenu}
      >
        <Image
          width={64}
          height={64}
          src="/images/misc/logo2.png"
          alt="arc-ggd logo"
        />
      </div>
      <Menu openMenu={openMenu} />
    </Container>
  );
};
