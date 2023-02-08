/* eslint-disable @next/next/no-img-element */
import {useState} from "react";
import styled from "styled-components";
import Image from "next/image";
import {products} from "../database/products";
import {Header} from "./Header";
import {useEffect} from "react";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 48px;
`;

export const EmployeeGrid = ({selectedEmployee, setSelectedEmployee}) => {
  return (
    <Grid>
      <div>
        <img
          style={{cursor: "pointer"}}
          width="100%"
          // src={`/images/about/employees/${
          //   selectedEmployee === 0 ? "sigrit-highlight" : "sigrit"
          // }.webp`}
          src="/images/about/employees/sigrit.webp"
          alt="arc-ggd product"
          // onClick={() => setSelectedEmployee(0)}
        />
        <img
          style={{cursor: "pointer"}}
          width="100%"
          // src={`/images/about/employees/${
          //   selectedEmployee === 1 ? "furukan-highlight" : "furukan"
          // }.webp`}
          src="/images/about/employees/furukan.webp"
          alt="arc-ggd product"
          // onClick={() => setSelectedEmployee(1)}
        />
      </div>
      <div>
        <img
          style={{cursor: "pointer"}}
          width="100%"
          // src={`/images/about/employees/${
          //   selectedEmployee === 2 ? "dagmar-highlight" : "dagmar"
          // }.webp`}
          src="/images/about/employees/dagmar.webp"
          alt="arc-ggd product"
          // onClick={() => setSelectedEmployee(2)}
        />
        <img
          style={{cursor: "pointer"}}
          width="100%"
          // src={`/images/about/employees/${
          //   selectedEmployee === 3 ? "Ingeborg-highlight" : "Ingeborg"
          // }.webp`}
          src="/images/about/employees/Ingeborg.webp"
          alt="arc-ggd product"
          // onClick={() => setSelectedEmployee(3)}
        />
      </div>
    </Grid>
  );
};

export default EmployeeGrid;
