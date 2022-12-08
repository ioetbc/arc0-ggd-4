import { ProductDetails } from "../components/ProductDetails";
import { Footer } from "../components/Footer";
import { products } from "../database/products";

const BasicTshirt = () => {
  const product = products?.find((p) => "/basic-tshirt" === p.url);
  console.log("product", product);
  return (
    <>
      <ProductDetails
        imageCarousel={product.imageCarousel}
        garmentName={product.garmentName}
        garmentDimensions={product.garmentDimensions}
        sku={product.sku}
        designer={product.designer}
        description={product.description}
        description2={product.description2}
        description3={product.description3}
        price={product.price}
        city={product.city}
      />
      <Footer />
    </>
  );
};

export default BasicTshirt;
