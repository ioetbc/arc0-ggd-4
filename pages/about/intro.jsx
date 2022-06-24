import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background: blue;
  color: yellow;
  padding: 1.8em 2.4em;
  display: flex;
  flex-direction: column;
  row-gap: 0.6em;
`;

const Pre = styled.div`
  display: flex;
  justify-content: space-between;

  p {
    font-size: 1.2em;
  }
`;

const Heading = styled.h1`
  font-size: 2.2em;
  text-transform: uppercase;
`;

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 48px;
  font-size: 1.6em;
`;

export const Intro = () => {
  return (
    <Container>
      <Pre>
        <p>Arc-GGD building Services Provision &amp; Estate Management Ltd.</p>
        <p>
          Arc-GGD Gesellschaft fur Gebaudedienstleistung und
          immobilienverwaltunf GmbH.
        </p>
      </Pre>
      <Heading>Kompetent . preiswert . flexibel</Heading>
      <Info>
        <h2>general information</h2>
        <h2>allgemeine informationen</h2>
      </Info>
    </Container>
  );
};
