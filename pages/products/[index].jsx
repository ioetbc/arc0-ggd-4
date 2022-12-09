import {useRouter} from "next/router";

import {ProductDetails} from "../../components/ProductDetails";
import {Footer} from "../../components/Footer";
import {clothes} from "../../database/clothing";
import {prints} from "../../database/prints";

const Product = () => {
  const router = useRouter();
  const path = router.query.index;

  const all = [...prints, ...clothes];
  const product = all?.find((p) => `/products/${path}` === p.url);

  if (!product) return null;
  return (
    <>
      <ProductDetails
        imageCarousel={product.imageCarousel}
        garmentName={product.garmentName}
        garmentDimensions={product.garmentDimensions}
        sku={product.sku}
        designer={product.designer}
        descriptions={product.descriptions}
        city={product.city}
        stripeLinks={product.stripeLinks}
        framingInfo={product?.framingInfo}
      />
      <Footer />
    </>
  );
};

export default Product;
