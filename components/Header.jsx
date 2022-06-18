import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import styled from "styled-components";

import { Logo } from "./Logo";
import { Menu } from "./Menu";

const Layout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  z-index: 10;
  padding: 16px;

  position: ${(props) => props.world && "fixed"};
  width: ${(props) => props.world && "100%"}; ;
`;

const Heading = styled.h1`
  text-transform: uppercase;
  font-size: 24px;
`;

export const Header = ({ world }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const router = useRouter();

  const handleMouseOver = () => {
    setOpenMenu(true);
  };

  const handleMouseLeave = () => {
    setOpenMenu(false);
  };

  return (
    <>
      <Layout world={world}>
        {/* <Menu openMenu={openMenu} setOpenMenu={setOpenMenu} /> */}
        <Image
          width={150}
          height={30}
          src={
            world
              ? "/images/misc/text-logo-white.svg"
              : "/images/misc/text-logo-black.svg"
          }
          alt="arc-ggd logo"
        />
        <Logo
          world
          handleMouseOver={handleMouseOver}
          handleMouseLeave={handleMouseLeave}
          openMenu={openMenu}
        />
      </Layout>
    </>
  );
};
