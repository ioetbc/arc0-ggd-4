import {useState} from "react";
import styled from "styled-components";
import isNull from "lodash/isNull";

import {EmployeeGrid} from "../components/EmployeeGrid";
import {Footer} from "../components/Footer";
import {Header} from "../components/Header";
import {Intro} from "./about/intro";
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
            <Intro />
          )}
          <MainText />
        </Details>
      </Layout>
      <Footer />
    </>
  );
};

export default About;
