import {useState} from "react";
import styled from "styled-components";
import isNull from "lodash/isNull";

import {EmployeeGrid} from "../components/EmployeeGrid";
import {Footer} from "../components/Footer";
import {Header} from "../components/Header";
import {MainText} from "../components/MainText";

const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 1400px;
  min-height: calc(100vh - 62px);
  padding: 16px;
  margin: 100px auto 0 auto;
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

const About = () => {
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  return (
    <>
      <Header />
      <Layout>
        <EmployeeGrid setSelectedEmployee={setSelectedEmployee} />
        <Details>
          {!isNull(selectedEmployee) ? (
            <>
              <h1>{employeeContent[selectedEmployee]?.heading}</h1>
              <p>{employeeContent[selectedEmployee]?.body}</p>
            </>
          ) : (
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
              <Heading>Kompetent . preiswert . flexibel</Heading>
              <Info>
                <h2>general information</h2>
                <h2>allgemeine informationen</h2>
              </Info>
            </Container>
          )}
          <MainText />
        </Details>
      </Layout>
      <Footer />
    </>
  );
};

export default About;
