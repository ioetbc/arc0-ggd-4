import { useRouter } from "next/router";

import { ProductDetails } from "../../components/ProductDetails";
import { Footer } from "../../components/Footer";
import { clothes } from "../../database/LSPortalDB";
import { prints } from "../../database/SMPortalDB";

const Product = () => {
  const router = useRouter();
  const path = router.query.index;
  console.log("path", path);
  const all = [...prints, ...clothes]
  const product = all?.find((p) => `/products/${path}` === p.url);
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
        description2={product.description2}
        description3={product.description3}
        price={product.price}
        city={product.city}
      />
      <Footer />
    </>
  );
};

export default Product;
