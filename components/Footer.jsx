import Image from "next/image";
import {useRouter} from "next/router";
import React from "react";
import styled from "styled-components";
import {releaseCanvas} from "../utils/releaseCanvas";

const Layout = styled.div`
  width: 100%;
  background: black;
  color: white;
  padding: 16px;
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FooterFlex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 24px;
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
  }
`;

const Container = styled.footer`
  font-size: 16px;
  text-transform: uppercase;

  ul {
    margin-bottom: 24px;
  }

  @media (min-width: 540px) {
    display: grid;
    gap: 24px;
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    font-size: 18px;
  }
  font-family: FreeSansBold;
  letter-spacing: 2px;
  line-height: 1.4;
`;

const Body = styled.p`
  font-size: 16px;
  max-width: 80%;
`;

const SubHeading = styled.p`
  max-width: 80%;
  font-size: 12px;
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;
`;

const Social = styled.div`
  display: flex;
  gap: 24px;
`;

const Spacer = styled.ul`
  margin-top: 32px;
`;

export const Footer = () => {
  const router = useRouter();

  const handleRouteChange = () => {
    releaseCanvas();
    router.push("/shipping");
  };
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
          <Flex
            onClick={() =>
              window.open("https://www.instagram.com/arcggd/", "_blank")
            }
          >
            <Image
              width={30}
              height={30}
              src="/images/misc/instagram.svg"
              alt="instagram"
            />
            <SubHeading>Follow us on instagram</SubHeading>
          </Flex>
          <div>
            <SubHeading onClick={handleRouteChange}>
              Shipping information
            </SubHeading>
          </div>
        </Social>
      </Spacer>
      <Spacer>
        <FooterFlex>
          <Body>
            Arc-GGD GmbH is subject to management and coordination by KiK
            Textilien und Non-Food GmbH, a subsidiary of Tengelmann
            Warenhandelsgesellschaft KG, Mülheim an der Ruhr, Germany. Company
            operations overseen by the Bayerische Verwaltung der staatlichen
            Schlösser, Gärten und Seen (Verwaltung Englischer Garten) |
            B.V.s.S,G,S (V.E.G) | Italian representation via Anti-Recupero Group
            Holding S.p.A, pursuant to art. 2497 and following of the Italian
            civil code. VIA FILIPPO TURATI, 12 | 20121 MILANO | REA MI-2013312 |
            P.IVA 08262010963 | county@pec.net | Share capital declared on the
            form used to file the the list of shareholders: 12.000,00 Euro.
          </Body>
          <Image
            className="footer-logo"
            width={100}
            height={100}
            src="/images/footer/footer-logo.svg"
            alt="Arc-GGD trademark"
          />
        </FooterFlex>
      </Spacer>
    </Layout>
  );
};
