import { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import { products } from "../database/products";
import { Header } from "./Header";
import { useEffect } from "react";

const GarmentName = styled.h1`
  font-size: 48px;
  text-transform: uppercase;
  line-height: 1;
  width: 100px;
  @font-face {
    font-family: FreeSaneBold;
    src: url("fonts/free-sans-bold.otf") format("opentype");
  }
  font-family: FreeSaneBold;
  letter-spacing: 5px;
  margin-bottom: 24px;
`;

const Designer = styled.h5`
  font-size: 16px;
  text-transform: uppercase;
  @font-face {
    font-family: FreeSaneBold;
    src: url("fonts/free-sans-bold.otf") format("opentype");
  }
  font-family: FreeSaneBold;
  letter-spacing: 2px;
`;

const Body = styled.p`
  font-size: 16px;
  margin-bottom: 16px;
`;

const Feature = styled.p`
  font-size: 16px;
  text-transform: uppercase;
`;

const Intro = styled.div`
  margin-top: 48px;
`;

const Outro = styled.div`
  margin-top: 84px;
  padding-top: 12px;
  position: relative;
  &:after {
    content: "";
    background: black;
    position: absolute;
    top: 0;
    left: 0;
    height: 1px;
    width: 150px;
  }
`;

const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  max-width: 1400px;
  min-height: calc(100vh - 62px);
  padding: 16px;
  margin: 100px auto 0 auto;
`;

const Details = styled.div``;

const PaymentContainer = styled.div`
  margin-top: 48px;
`;

const PurchaseContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 48px;
`;

const Button = styled.button`
  border: 1px solid black;
  padding: 4px 32px;
  text-transform: uppercase;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const EmployeeGrid = ({
  imageCarousel,
  garmentName,
  garmentDimensions,
  sku,
  designer,
  description,
  price,
}) => {
  return (
    <>
      <Header />
      <Layout>
        <Grid>
          <Image
            width={400}
            height={400}
            src="/images/employees/employee-1.png"
            alt="arc-ggd product"
          />
          <Image
            width={400}
            height={400}
            src="/images/employees/employee-2.png"
            alt="arc-ggd product"
          />
          <Image
            width={400}
            height={400}
            src="/images/employees/employee-3.png"
            alt="arc-ggd product"
          />
          <Image
            width={400}
            height={400}
            src="/images/employees/employee-4.png"
            alt="arc-ggd product"
          />
        </Grid>
        <Details>
          <GarmentName>{garmentName}</GarmentName>
          <Designer>{designer}</Designer>

          <Intro>
            <Body>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
              asperiores iusto illo fuga dolorum beatae perferendis eaque id
              soluta eligendi!
            </Body>
            <Body>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
              asperiores iusto illo fuga dolorum beatae perferendis eaque id
              soluta eligendi!
            </Body>
            <Body>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
              asperiores iusto illo fuga dolorum beatae perferendis eaque id
              soluta eligendi!
            </Body>
          </Intro>
          <Outro>
            <Feature>designed by {designer} for arc-ggd, munich</Feature>
            <Feature>m9eztw 2/25kg</Feature>
            <Feature>munich</Feature>
            <Feature>
              muc&nbsp;&nbsp;&nbsp;&nbsp;ls128&nbsp;&nbsp;&nbsp;&nbsp;01 feb
              2022
            </Feature>
          </Outro>
          <PaymentContainer>
            <Feature>price:</Feature>
            <PurchaseContainer>
              <Button>buy</Button>
            </PurchaseContainer>
          </PaymentContainer>
        </Details>
      </Layout>
    </>
  );
};

export default EmployeeGrid;
