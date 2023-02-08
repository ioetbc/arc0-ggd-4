import React, {useState, useEffect} from "react";
import Router from "next/router";
import styled from "styled-components";
import {IconContext} from "react-icons";
import {BiVolume, BiVolumeMute} from "react-icons/bi";

import {Button} from "../components/Button";
import {Header} from "../components/Header";
import {Footer} from "../components/Footer";
import EmployeeGrid from "../components/EmployeeGrid";

const Layout = styled.div`
  padding: 16px;

  @media (min-width: 900px) {
    margin: 0 20% 100px 20%;
  }
`;

const Heading = styled.h1`
  font-size: 32px;
  text-transform: uppercase;
  line-height: 1;
  font-family: FreeSansBold;
  letter-spacing: 4px;
  margin-bottom: 24px;

  @media (min-width: 900px) {
    font-size: 48px;
  }
`;

const SubHeading = styled.h2`
  font-size: 24px;
  text-transform: uppercase;
  line-height: 1;
  font-family: FreeSansBold;
  letter-spacing: 4px;
  margin-top: 64px;
  margin-bottom: 24px;
  @media (min-width: 900px) {
    font-size: 32px;
  }
`;

const Body = styled.p`
  font-size: 16px;
  margin-bottom: 8px;
  font-family: FreeSans;
`;

const Shipping = () => {
  return (
    <>
      <Header />
      <Layout>
        <EmployeeGrid />
        <Heading>Shipping info</Heading>
        <SubHeading>Delivery</SubHeading>
        <Body>We ship internationally.</Body>
        <Body>
          Shipping will be calculated at checkout, price dependant on location
          and service chosen. We offer free shipping on all orders over £200.
        </Body>
        <Body>
          We do our best to dispatch orders as soon as possible, most orders
          placed before 1pm will be dispatched the same day. You will receive a
          dispatch email once your order is on it’s way to you.
        </Body>
        <Body>
          If no one is at the premises to take delivery and the products can’t
          be posted through your letterbox, you will be left a note informing
          you of how to rearrange delivery or collect the products from a local
          depot. If the delivery is not re arranged/ collected from the depot
          then the item will be sent back to us, if you wish for the item to be
          sent out again you will be required to cover the cost of additional
          shipping.
        </Body>
        <Body>
          If the supply of our products is delayed by an event outside our
          control then we cannot accept responsibility. We will email you as as
          soon as possible and try to minimise the effect of the delay.
        </Body>
        <Body>
          If you have moved or give us an incorrect address we cannot be held
          responsible. Please check your order confirmation email and contact us
          at info@heresy.london immediately if any changes need to be made.
        </Body>
        <Body>
          Please note that orders outside the U.K may be eligible to pay local
          customs or duty charges; these are not included in your payment to us.
        </Body>
        <SubHeading>Returns</SubHeading>
        <Body>
          If for any reason you are unsatisfied with an item(s) we offer a 14
          day returns policy, this applies for both unwanted and faulty items.
          Before sending an item back please email us and we will send a returns
          form, include this in the package with the item/ items posted back to
          us.
        </Body>
        <Body>
          All returned items must be in perfect resalable condition, we will not
          accept returns for any non faulty items that have been worn/ or tags
          removed; we reserve the right to refuse a refund. Once items are
          received in the required condition we will issue a refund. It is the
          customer’s responsibility to ensure that the return arrives back to
          us, HERESY will not take responsibility for returned items that are
          lost in transit. Shipping costs will not be refunded, with the
          exception of goods confirmed to be faulty. In the case of an exchange,
          we will cover the cost of the shipping the new item to you.
        </Body>
        <Body>
          The customer is responsible for any customs charges that may be
          applied to your package. Customs determines these charges, and it is
          impossible for HERESY to predict what these charges may be. In the
          case that HERESY is forced to pay customs charges on returned items
          these charges will be recovered from the value of the customer’s
          refund.
        </Body>
      </Layout>
      <Footer />
    </>
  );
};

export default Shipping;
