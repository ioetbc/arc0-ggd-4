import React from "react";
import styled from "styled-components";

const Layout = styled.div`
  position: absolute;
  right: 16px;
  transform: ${(props) =>
    props.openMenu ? "translateY(0)" : "translateY(-500px)"};
  transition: transform 0.5s;
  width: 400px;
  height: 350px;
  background: #35e9b0;
  z-index: 100;
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 16px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

const MenuItem = styled.h3`
  text-transform: uppercase;
  font-size: 24px;
`;

const Divider = styled.div`
  margin-top: 80px;
  border-top: 1px solid black;
  padding-top: 8px;
  width: 70%;
`;

export const Menu = ({ openMenu, setOpenMenu }) => {
  return (
    <Layout openMenu={openMenu} onMouseLeave={() => setOpenMenu(false)}>
      <Divider>
        <MenuItem>Product page 1</MenuItem>
        <MenuItem>About</MenuItem>
        <MenuItem>Terms</MenuItem>
      </Divider>
    </Layout>
  );
};
