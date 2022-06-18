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

const Input = styled.div`
  border: 1px solid black;
  text-transform: uppercase;
  position: relative;
  display: flex;
  /* width: 20em;
  height: 3em; */
  padding: 4px 32px 4px 16px;
  overflow: hidden;
  position: relative;

  select {
    /* Reset Select */
    appearance: none;
    outline: 0;
    border: 0;
    box-shadow: none;
    /* Personalize */
    background-image: none;
    cursor: pointer;
  }
`;

export const ProductDetails = ({
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
        <div>
          <Image
            width={600}
            height={600}
            src="/images/product-details/stone-bg.webp"
            alt="arc-ggd product"
          />
        </div>
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
            <PurchaseContainer>
              <Feature>size:</Feature>
              <Input>
                <select name="size" id="size">
                  <option value="small">Small</option>
                  <option value="medium">Medium</option>
                  <option value="large">Large</option>
                  <option value="extra large">Extra Large</option>
                </select>
              </Input>
            </PurchaseContainer>
          </PaymentContainer>
          <PaymentContainer>
            <Feature>price:</Feature>
            <PurchaseContainer>
              <Feature>£{price.gbp} inc. VAT</Feature>
              <Button>buy</Button>
            </PurchaseContainer>
          </PaymentContainer>
        </Details>
      </Layout>
    </>
  );
};

export default ProductDetails;
