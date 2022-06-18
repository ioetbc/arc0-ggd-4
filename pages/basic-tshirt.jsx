import { useEffect, useState } from "react";
import { ProductDetails } from "../components/ProductDetails";
import { Footer } from "../components/Footer";
import { products } from "../database/products";

const BasicTshirt = () => {
  const product = products?.find((p) => "/basic-tshirt" === p.url);
  const [networkRequests, setNetworkRequests] = useState([]);

  // console.log("networkRequests", networkRequests);

  return (
    <>
      <ProductDetails
        imageCarousel={product.imageCarousel}
        garmentName={product.garmentName}
        garmentDimensions={product.garmentDimensions}
        sku={product.sku}
        designer={product.designer}
        description={product.description}
        price={product.price}
      />
      <Footer />
    </>
  );
};

export default BasicTshirt;
