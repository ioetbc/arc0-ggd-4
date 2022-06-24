import Image from "next/image";
import styled from "styled-components";

const Container = styled.div`
  z-index: 200;
  background: #35e9b0;
  transition-property: width, height;
  transition-duration: 0.2s;
  transition-timing-function: ease-out;
  transition-delay: ${(props) => (props.openMenu ? "0s" : "0.3s")};
  height: ${(props) => (props.openMenu ? "300px" : "100px")};
  width: ${(props) => (props.openMenu ? "calc(100% - 32px)" : "100px")};
  @media (min-width: 768px) {
    width: ${(props) => (props.openMenu ? "400px" : "100px")};
  }

  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  position: absolute;
  right: 16px;
  overflow: hidden;
  .logo {
    display: flex;
    position: absolute;
    right: 18px;
    top: 18px;
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

export const Logo = ({ openMenu, handleMouseOver, handleMouseLeave }) => {
  console.log("openMenu", openMenu);
  return (
    <Container
      openMenu={openMenu}
      onMouseEnter={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="logo"
        onClick={openMenu ? handleMouseLeave : handleMouseOver}
      >
        <Image
          width={64}
          height={64}
          src="/images/misc/logo.webp"
          alt="arc-ggd logo"
        />
      </div>
      {/* {openMenu && ( */}
      <div className="divider">
        <div className="item">Product page 1</div>
        <div className="item">About</div>
        <div className="item">Terms</div>
      </div>
      {/* )} */}
    </Container>
  );
};

// logo needs to grow not have something appear put of nowhere
