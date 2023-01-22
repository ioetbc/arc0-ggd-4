import {useState} from "react";
import styled from "styled-components";
import isNull from "lodash/isNull";

import {EmployeeGrid} from "../components/EmployeeGrid";
import {Footer} from "../components/Footer";
import {Header} from "../components/Header";
import {MainText} from "../components/MainText";
import Image from "next/image";

const Layout = styled.div`
  /* height: calc(100vh - 62px); */
  padding: 16px;
  margin: 0 auto 0 auto;
`;

const Something = styled.div`
  @media (min-width: 900px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

const Details = styled.div``;

const employeeContent = [
  {
    heading: "sigrit baumgartner",
    body: "this is 0 intro",
    text: [
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything.",
    ],
    germanText: [
      "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old",
      ,
    ],
  },
  {
    heading: "dagmar werther",
    body: "this is 1 intro",
    text: [
      "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    ],
    germanText: [
      "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old",
      ,
    ],
  },
  {
    heading: "furukan azimir",
    body: "this is 2 intro",
    text: [
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old",
      "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
      ,
    ],
    germanText: [
      "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old",
      ,
    ],
  },
  {
    heading: "ingeborg harz",
    body: "this is 3 intro",
    text: [
      "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old",
      ,
    ],
    germanText: [
      "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old",
      ,
    ],
  },
];

const Container = styled.div`
  background: blue;
  color: yellow;
  padding: 1.8em 2.4em;
  row-gap: 0.6em;

  @media (min-width: 900px) {
    display: flex;
    flex-direction: column;
  }
`;

const Pre = styled.div`
  display: none;

  @media (min-width: 900px) {
    display: auto;
    display: flex;
    justify-content: space-between;
    gap: 48px;

    p {
      font-size: 1.2em;
      margin-bottom: 12px;
    }
  }
`;

const Heading = styled.h1`
  display: none;
  @media (min-width: 900px) {
    display: flex;
    font-size: 2.2em;
    text-transform: uppercase;
    justify-content: space-between;
    gap: 48px;
  }
`;

const Info = styled.div`
  display: none;

  @media (min-width: 900px) {
    font-family: FreeSansBold;
    transform: scaleY(2.5);
    font-size: 1.2rem;
    letter-spacing: 1px;
    /* text-align: center; */
    text-transform: uppercase;
    display: grid;
    gap: 2em;
    grid-template-columns: 1fr 1fr;
    font-size: 1.4em;
    margin-top: 24px;
  }
`;

const EmployeeGridText = styled.p`
  margin-top: 24px;
`;

const Outro = styled.div`
  @media (min-width: 900px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

const AuthenticityLogos = styled.div`
  margin-top: 12px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  align-items: center;
  justify-items: center;

  @media (min-width: 900px) {
    display: flex;
    justify-content: space-around;
  }
`;

const CompanyDetails = styled.div`
  @media (min-width: 900px) {
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 48px;
  }
`;

const EmployeeName = styled.h1`
  font-family: FreeSansBold;
  transform: scaleY(2.5);
  font-size: 1.2rem;
  letter-spacing: 1px;
  text-align: center;
  text-transform: uppercase;
  @media (min-width: 900px) {
    text-align: left;
    font-size: 3rem;
    letter-spacing: 5px;
  }
`;

const About = () => {
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  return (
    <>
      <Header />
      <Layout>
        <Something>
          <div>
            <EmployeeGrid
              selectedEmployee={selectedEmployee}
              setSelectedEmployee={setSelectedEmployee}
            />
          </div>
          <Details>
            <Container>
              <Pre>
                <p>
                  Arc-GGD building Services Provision &amp; Estate Management
                  Ltd.
                </p>

                <p>
                  Arc-GGD Gesellschaft fur Gebaudedienstleistung und
                  immobilienverwaltunf GmbH.
                </p>
              </Pre>
              {isNull(selectedEmployee) ? (
                <Heading>
                  <div>Kompetent</div>
                  <div>preiswert</div>
                  <div>flexibel</div>
                </Heading>
              ) : (
                <EmployeeName>
                  {employeeContent[selectedEmployee]?.heading}
                </EmployeeName>
              )}
              <Info>
                {isNull(selectedEmployee) ? (
                  <>
                    <h2 style={{display: "block"}}>general information</h2>
                    <h2>allgemeine informationen</h2>
                  </>
                ) : (
                  <>
                    <h2>EN</h2>
                    <h2>DE</h2>
                  </>
                )}
              </Info>
            </Container>
            <MainText
              text={employeeContent[selectedEmployee]?.text}
              germanText={employeeContent[selectedEmployee]?.germanText}
            />
          </Details>
        </Something>

        <Outro>
          <div>
            <EmployeeGridText>
              Arc-GGD GmpH is subject to managment and coordination by KiK
              Textillien und Non-Food GmbH, a subsidiary of Tengelmann
              Warenhandelsgesellschaft KG. mülheim an der Ruhr, Germany.
            </EmployeeGridText>
            <AuthenticityLogos>
              <img
                src="/images/about/certificate-icon.png"
                alt="GGD certificate"
              />
              <img src="/images/about/fompa.png" alt="GGD certificate" />
              <img src="/images/about/iso.png" alt="GGD certificate" />
              <img src="/images/about/gold-award.png" alt="GGD certificate" />
            </AuthenticityLogos>
          </div>
          <CompanyDetails>
            <div>
              <EmployeeGridText>
                Company subject to management and coordination by the Bayerische
                Verwaltung der staatlichen Schlösser, Gärten und Seen
                (Verwaltung Englischer Garten) | B.V.s.S.G.S (V.E.G) |
              </EmployeeGridText>
              <EmployeeGridText>
                Italian representation via Ant-Recupero Group Holding S.p.A,
                pursuant to art. 2497 and the following of the italian civil
                code. VIA FILIPPO TURATI, 12 | 20121 MILANO | REA MI-2013312 |
                P.IVA 082620010963 | county@pec.net |
              </EmployeeGridText>
            </div>
            <div style={{width: "300px", marginTop: "32px"}}>
              <Image
                src="/images/about/ggd.png"
                alt="GGD"
                width="116px"
                height="100px"
              />
            </div>
          </CompanyDetails>
        </Outro>
      </Layout>
      <Footer />
    </>
  );
};

export default About;
