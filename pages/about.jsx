import { useState } from "react";
import { EmployeeGrid } from "../components/EmployeeGrid";
import { Footer } from "../components/Footer";
import { products } from "../database/products";

const BasicTshirt = () => {
  return (
    <>
      <EmployeeGrid />
      <Footer />
    </>
  );
};

export default BasicTshirt;
