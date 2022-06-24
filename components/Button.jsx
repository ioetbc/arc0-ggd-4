import React from "react";
import styled from "styled-components";

const ButtonStyles = styled.button`
  border: 1px solid black;
  padding: 4px 32px;
  text-transform: uppercase;
  cursor: pointer;
`;

export const Button = ({ text, className, onClick }) => {
  return (
    <ButtonStyles onClick={onClick} className={className}>
      {text}
    </ButtonStyles>
  );
};
