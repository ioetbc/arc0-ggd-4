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
`;

export const EmployeeGrid = ({setSelectedEmployee}) => {
  return (
    <Grid>
      <div>
        <img
          width="100%"
          src="/images/employees/employee-1.png"
          alt="arc-ggd product"
          onClick={() => setSelectedEmployee(0)}
        />
        <img
          width="100%"
          src="/images/employees/employee-2.png"
          alt="arc-ggd product"
          onClick={() => setSelectedEmployee(1)}
        />
      </div>
      <div>
        <img
          width="100%"
          src="/images/employees/employee-3.png"
          alt="arc-ggd product"
          onClick={() => setSelectedEmployee(2)}
        />
        <img
          width="100%"
          src="/images/employees/employee-4.png"
          alt="arc-ggd product"
          onClick={() => setSelectedEmployee(3)}
        />
      </div>
    </Grid>
  );
};

export default EmployeeGrid;
