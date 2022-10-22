import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Carousel} from "react-responsive-carousel";
import {Header} from "./Header";
import {Button} from "./Button";

const GarmentName = styled.h1`
  font-size: 48px;
  text-transform: uppercase;
  line-height: 1;
  width: 100px;
  font-family: FreeSansBold;
  letter-spacing: 5px;
  margin-bottom: 24px;
`;

const Designer = styled.h5`
  font-size: 16px;
  text-transform: uppercase;

  font-family: FreeSansBold;
  letter-spacing: 2px;
`;

const Body = styled.p`
  font-size: 16px;
  margin-bottom: 16px;

  font-family: FreeSans;
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
  max-width: 1400px;
  min-height: calc(100vh - 62px);
  padding: 16px;
  margin: 0 0 48px 0;
  /* margin-top: 32px; */

  .feature-image {
    margin-bottom: 32px;
  }

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin: 100px auto 0 auto;
  }
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
  city,
  sku,
  designer,
  description,
  price,
}) => {
  return (
    <>
      <Header />
      <Layout>
        <div className="feature-image">
          <Carousel
            showArrows={true}
            showIndicators={false}
            showThumbs={false}
            autoPlay={false}
            swipeable={true}
            emulateTouch={true}
            useKeyboardArrows={true}
          >
            {imageCarousel.map((src) => (
              <img key={src} src={src} alt="garment" />
            ))}
          </Carousel>
        </div>
        <Details>
          <GarmentName>{garmentName}</GarmentName>
          <Designer>{designer}</Designer>

          <Intro>
            <Body>{description}</Body>
          </Intro>
          <Outro>
            <Feature>
              designed by {designer} for arc-ggd, {city}
            </Feature>
            <Feature>{sku}</Feature>
            <Feature>{city}</Feature>
            <Feature>
              muc&nbsp;&nbsp;&nbsp;&nbsp;ls128&nbsp;&nbsp;&nbsp;&nbsp;01 feb
              2022
            </Feature>
          </Outro>
          <PaymentContainer>
            <PurchaseContainer>
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
              <Button text="buy" />
            </PurchaseContainer>
          </PaymentContainer>
        </Details>
      </Layout>
    </>
  );
};

export default ProductDetails;
