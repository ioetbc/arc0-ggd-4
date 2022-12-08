import {useState} from "react";
import {useRouter} from "next/router";
import Image from "next/image";
import styled from "styled-components";

import {Logo} from "./Logo";

const Layout = styled.div`
  display: flex;
  justify-content: space-between;
  z-index: 10;
  padding: 16px;
  /* background: red; */
  position: ${(props) => props.world && "fixed"};
  width: ${(props) => props.world && "100%"};
  height: 100px;
`;

const Heading = styled.h1`
  text-transform: uppercase;
  font-size: 24px;
`;

export const Header = ({world}) => {
  const [openMenu, setOpenMenu] = useState(false);
  const router = useRouter();

  const handleOpenMenu = () => {
    setOpenMenu(true);
  };

  const handleCloseMenu = () => {
    setOpenMenu(false);
  };

  return (
    <>
      <Layout world={world}>
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
          handleOpenMenu={handleOpenMenu}
          handleCloseMenu={handleCloseMenu}
          openMenu={openMenu}
        />
      </Layout>
    </>
  );
};
