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
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const Details = styled.div``;

const employeeContent = [
  {
    heading: "sigrit baumgartner",
    body: "this is 0 intro",
  },
  {
    heading: "dagmar werther",
    body: "this is 1 intro",
  },
  {
    heading: "furukan azimir",
    body: "this is 2 intro",
  },
  {
    heading: "ingeborg harz",
    body: "this is 3 intro",
  },
];

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
  gap: 48px;

  p {
    font-size: 1.2em;
  }
`;

const Heading = styled.h1`
  font-size: 2.2em;
  text-transform: uppercase;
  display: flex;
  justify-content: space-between;
  gap: 48px;
`;

const Info = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  font-size: 1.4em;

  h2 {
    text-transform: uppercase;
  }
`;

const EmployeeGridText = styled.p`
  margin-top: 24px;
`;

const Outro = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const AuthenticityLogos = styled.div`
  margin-top: 12px;
  display: flex;
  justify-content: space-around;
`;

const CompanyDetails = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 48px;
`;

const EmployeeName = styled.h1`
  font-size: 2.5rem;
  text-transform: uppercase;
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
                    <h2>general information</h2>
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
            <MainText />
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
              <Image
                src="/images/about/certificate-icon.png"
                alt="GGD certificate"
                width="236px"
                height="100px"
              />
              <Image
                src="/images/about/fompa.png"
                alt="GGD certificate"
                width="70px"
                height="92px"
              />
              <Image
                src="/images/about/iso.png"
                alt="GGD certificate"
                width="166px"
                height="72px"
              />
              <Image
                src="/images/about/gold-award.png"
                alt="GGD certificate"
                width="80px"
                height="87px"
              />
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
            <div style={{width: "300px"}}>
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
