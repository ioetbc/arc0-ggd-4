import React from "react";
import styled from "styled-components";

const HIS = styled.div`
  margin-top: 24px;
  height: 100%;

  @media (min-width: 900px) {
    display: flex;
    justify-content: space-between;
    gap: 2em;
    margin-top: 0;
    padding: 2em;
  }
`;

const Para = styled.div`
  margin-bottom: 2rem;
`;
const German = styled.div`
  display: none;
  @media (min-width: 900px) {
    display: block;
  }
`;

export const MainText = ({text, germanText}) => {
  return (
    <HIS>
      <div>
        {text && text.map((item, index) => <Para key={index}>{item}</Para>)}
      </div>
      <German>
        {germanText &&
          germanText.map((item, index) => <Para key={index}>{item}</Para>)}
      </German>
    </HIS>
  );
};
