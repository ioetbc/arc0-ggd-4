import React from "react";
import styled from "styled-components";

const Layout = styled.div`
  width: 100%;
  background: black;
  color: white;
  padding: 16px;
`;

const Container = styled.footer`
  font-size: 18px;
  text-transform: uppercase;

  ul {
    margin-bottom: 24px;
  }

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 24px;
    font-size: 24px;
  }
  @font-face {
    font-family: FreeSaneBold;
    src: url("fonts/free-sans-bold.otf") format("opentype");
  }
  font-family: FreeSaneBold;
  letter-spacing: 2px;
  line-height: 1.2;
`;

const Body = styled.p`
  font-size: 16px;
  max-width: 80%;
`;

const SubHeading = styled.p`
  font-size: 16px;
  text-transform: uppercase;
`;

const Social = styled.div`
  display: flex;
  gap: 24px;
`;

const Spacer = styled.ul`
  margin-top: 32px;
`;

export const Footer = () => {
  return (
    <Layout>
      <Container>
        <ul>
          <li>MECHTHILDT.SDF</li>
          <li>SOFT EPISTEME</li>
          <li>ARC CADENCE</li>
          <li>DOOMSCROLLER.420</li>
          <li>KOLMOGOROV COMPLEXITY</li>
          <li>MY FIRST SMORGASBORD</li>
          <li>SO LIKE.. IT’S GESTATING?</li>
          <li>KNOROZOV</li>
          <li>LUXURY ECHELON</li>
        </ul>
        <ul>
          <li>VERSCHWÖRUNGSFANTASIEN</li>
          <li>MONOLINGUAL FIELD SITUATION</li>
          <li>DECLARATIVE ENOUGH</li>
          <li>4.669201</li>
          <li>PHONETIC DISTANCE</li>
          <li>GOING &quot;FULL AUSTRAL&quot;</li>
          <li>THIRD AMBION</li>
          <li>HEIMCORE</li>
          <li>PRESCRIPTIVIST</li>
        </ul>
        <ul>
          <li>RHAPSODY-NNR</li>
          <li>SHIELDS</li>
          <li>GEWORFENHEIT</li>
          <li>PLUS ULTRA</li>
          <li>CAVITY RING-DOWN</li>
          <li>SEXUAL ABSTRACTION</li>
          <li>HYPERCONTEXT</li>
          <li>THE NEW PRECARITY</li>
          <li>DJ KUSTOMFETISH</li>
        </ul>
        <ul>
          <li>HYGIENEKONZEPT</li>
          <li>DISSIMILATE</li>
          <li>DER NEUE PRAGMATISMUS</li>
          <li>AVANT-PASSIV</li>
          <li>ZWOLLE</li>
          <li>POINT-FREE GEOMETRY</li>
          <li>STRANGE ATTRACTOR</li>
          <li>ADVANCED FOOD &amp; WINE</li>
          <li>EKPHRASIS</li>
        </ul>
      </Container>
      <Spacer>
        <Social>
          <div>
            <SubHeading>ingeborg harz</SubHeading>
            <li>
              <Body>instagram</Body>
            </li>
            <li>
              <Body>twitter</Body>
            </li>
          </div>
          <div>
            <SubHeading>lukas fashinger</SubHeading>
            <li>
              <Body>instagram</Body>
            </li>
            <li>
              <Body>twitter</Body>
            </li>
          </div>
        </Social>
      </Spacer>
      <Spacer>
        <Body>
          ARC-GGD GmbH is subject to management and coordination by KiK
          Textilien und Non-Food GmbH, a subsidiary of Tengelmann
          Warenhandelsgesellschaft KG, Mülheim an der Ruhr, Germany. Company
          subject to management and coordination by New Guards Group Holding
          S.p.A, pursuant to art. 2497 and following of the Italian civil code.
          VIA FILIPPO TURATI, 12 | 20121 MILANO | REA MI-2013312 | P.IVA
          08262010963 | county@pec.net | Share capital declared on the form used
          to file the the list of shareholders: 12.000,00 Euro | Corporation
        </Body>
      </Spacer>
    </Layout>
  );
};
