import { useRouter } from "next/router";

import { ProductDetails } from "../../components/ProductDetails";
import { Footer } from "../../components/Footer";
import { products } from "../../database/products";

const Product = () => {
  const router = useRouter();
  const path = router.query.index;
  console.log("path", path);
  const product = products?.find((p) => `/${path}` === p.url);
  console.log("product", product);
  if (!product) return null;
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
        city={product.city}
      />
      <Footer />
    </>
  );
};

export default Product;
