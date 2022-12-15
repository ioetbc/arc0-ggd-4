import React from "react";
import styled from "styled-components";

const HIS = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2em;
  height: 100%;
`;

const Para = styled.div`
  margin-bottom: 2rem;
`;

export const MainText = ({leftText, rightText}) => {
  return (
    <HIS>
      <div>
        <Para>
          English English English English English English English English
          English English English English English English English English
          English English English English English English English English
          English English English English English English English English
          English English English English English English English English
          English English English English English English English English
          English English English English English English English English
          English English English English English English English English
        </Para>
        <Para>
          English English English English English English English English
          English English English English English English English English
          English English English English English English English English
        </Para>
      </div>
      <div>
        <Para>
          German German German German German German German German German German
          German German German German German German German German German German
          German German German German German German German German German German
          German German German German German German German German German German
          German German German German German German German German German German
          German German German German German German German German German German
        </Para>
        <Para>
          German German German German German German German German German German
          German German German German German German German German German German
          German German German German
        </Para>
      </div>
    </HIS>
  );
};
