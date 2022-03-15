import { ProductDetails } from "../components/ProductDetails";
import { products } from "../database/products";

const BasicTshirt = () => {
  const product = products?.find((p) => "/basic-tshirt" === p.url);

  return (
    <ProductDetails
      imageCarousel={product.imageCarousel}
      garmentName={product.garmentName}
      garmentDimensions={product.garmentDimensions}
      sku={product.sku}
      designer={product.designer}
      description={product.description}
      price={product.price}
    />
  );
};

export default BasicTshirt;
