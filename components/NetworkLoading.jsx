import { useEffect, useState } from "react";
import styled from "styled-components";

import { products } from "../database/products";

const NetworkRequests = styled.ul`
  /* background: black; */
  font-family: monospace;
  li {
    color: white;
  }
`;

export const NetworkLoading = ({ networkRequests }) => {
  console.log({
    NETWORK: networkRequests.length,
    products: products.length,
  });

  return (
    <NetworkRequests>
      {networkRequests.map((request, index) => (
        <li key={index}>
          {request.url} - {request.status} - {request.statusText}
        </li>
      ))}
    </NetworkRequests>
  );
};
