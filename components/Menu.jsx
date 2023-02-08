import React from "react";
import styled from "styled-components";
import {useRouter} from "next/router";

const MenuItem = styled.h3`
  text-transform: uppercase;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const Divider = styled.div`
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
`;

const menuItems = [
  {
    label: "Clothing portal",
    url: "/clothing",
  },
  {
    label: "Print portal",
    url: "/prints",
  },
  {
    label: "About",
    url: "/about",
  },
  {
    label: "Home",
    url: "/world",
  },
  {
    label: "Shipping",
    url: "/shipping",
  },
];

export const Menu = ({openMenu}) => {
  const router = useRouter();
  return (
    <Divider openMenu={openMenu}>
      {menuItems.map((item) => (
        <MenuItem
          key={item.label}
          // onClick={() => (window.location.href = item.url)}
          onClick={() => router.push(item.url).then(() => router.reload())}
        >
          {item.label}
        </MenuItem>
      ))}
    </Divider>
  );
};
