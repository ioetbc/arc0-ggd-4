import React from "react";
import styled from "styled-components";

const SelectStyles = styled.select`
  border: 1px solid black;
  padding: 4px 32px;
  text-transform: uppercase;
  cursor: pointer;
`;

export const Accordion = ({title, description}) => {
  return (
    <div className="container">
      <div className="faq-drawer">
        <input
          className="faq-drawer__trigger"
          id="faq-drawer"
          type="checkbox"
        />
        <label className="faq-drawer__title" htmlFor="faq-drawer">
          {title}
        </label>
        <div className="faq-drawer__content-wrapper">
          <div className="faq-drawer__content">
            {description.map((desc, index) => (
              <p style={{margin: "4px"}} key={index}>
                {desc}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
