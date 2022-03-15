import { useState } from "react";
import { useRouter } from "next/router";
import { products } from "../database/products";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Header } from "./Header";

export const ProductDetails = ({
  imageCarousel,
  garmentName,
  garmentDimensions,
  sku,
  designer,
  description,
  price,
}) => {
  const [carouselIndex, setCarouselIndex] = useState(0);

  return (
    <>
      <Header />

      <div className="grid mt-24 md:gap-20 md:grid-cols-2 max-w-7xl m-4 md:mt-0 md:mr-0 md:mb-0 md:ml-16">
        <div>
          <Carousel
            autoPlay={true}
            infiniteLoop={true}
            interval={5000}
            stopOnHover={true}
            useKeyboardArrows={true}
            showStatus={false}
            centerMode={true}
            centerSlidePercentage={100}
            dynamicHeight={true}
            emulateTouch={true}
            showThumbs={false}
            showIndicators={false}
            showArrows={false}
            onChange={(index) => setCarouselIndex(index)}
          >
            {imageCarousel.map((image) => (
              <>
                <img src={image} />
              </>
            ))}
          </Carousel>
          <p className="text-right mt-2">( {carouselIndex + 1} )</p>
        </div>
        <div className="md:mt-36">
          <h1 className="text-2xl ">{garmentName}</h1>
          <ul className="flex gap-10 mt-10 mb-10">
            <div>
              <li>edition</li>
              <li>material</li>
              <li>dimensions</li>
              <li>eth</li>
              <li>gbp</li>
              <li>euro</li>
              <li>designer</li>
              <li>sku</li>
            </div>
            <div>
              <li>1</li>

              <li>ceramic, copper glaze</li>

              <li>
                w: {garmentDimensions.width}cm h: {garmentDimensions.height}cm
              </li>

              <div>
                <li>ETH: {price.eth}</li>
                <li>GBP: {price.gbp}</li>
                <li>EURO: {price.euro}</li>
              </div>
              <li>{designer}</li>
              <li>{sku}</li>
            </div>
          </ul>
          <p>{description}</p>
          <button className="mt-4">( enquire )</button>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
