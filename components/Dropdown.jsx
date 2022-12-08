import React from "react";
import styled from "styled-components";

const SelectStyles = styled.select`
  border: 1px solid black;
  padding: 4px 32px;
  text-transform: uppercase;
  cursor: pointer;
`;

export const Dropdown = ({options, className, onClick}) => {
  return (
    <SelectStyles onClick={onClick} className={className}>
      {options.map((option) => (
        <option key={option.value}>{option}</option>
      ))}
    </SelectStyles>
  );
};
