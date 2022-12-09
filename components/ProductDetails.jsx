import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Carousel} from "react-responsive-carousel";
import {Header} from "./Header";
import {Button} from "./Button";
import {useState} from "react";
import {Accordion} from "./Accordion";

const GarmentName = styled.h1`
  font-size: 32px;
  text-transform: uppercase;
  line-height: 1;
  font-family: FreeSansBold;
  letter-spacing: 4px;
  margin-bottom: 24px;

  @media (min-width: 900px) {
    font-size: 48px;
    width: 500px;
  }
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
  /* margin-top: 84px; */
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
  height: 100%;
  padding: 16px;
  margin: 0 0 100px 0;

  @media (min-width: 900px) {
    display: grid;
    gap: 42px;
    grid-template-columns: 1fr 1fr;
    margin: 12px auto 100px auto;
  }
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 48px;
  @media (min-width: 900px) {
    margin-top: 0;
  }
`;

const PaymentContainer = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 24px;
`;

const ButtonContainer = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  flex: "end";
  gap: 24px;
`;

const PurchaseContainer = styled.div`
  display: flex;
  gap: 48px;
`;

const ActionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 400px;
`;

const Input = styled.div`
  border: 1px solid black;
  text-transform: uppercase;
  position: relative;
  display: flex;
  text-align: center;
  width: 8rem;
  height: 2rem;
  overflow: hidden;
  position: relative;
  padding-right: 1rem;

  select {
    outline: 0;
    border: 0;
    box-shadow: none;
    width: 100%;
    text-align: center;
    background-size: 20px;
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
  descriptions,
  stripeLinks,
  additionalInfoTitle,
  additionalInfoDescription,
}) => {
  const [price, setPrice] = useState(stripeLinks[0].price);
  const [stripeUrl, setStripeUrl] = useState(stripeLinks[0].url);
  const handleSizeChange = (event) => {
    const product = stripeLinks.find(
      (item) => item.label === event.target.value
    );
    setStripeUrl(product.url);
    setPrice(product.price);
  };

  return (
    <>
      <Header />
      <Layout>
        <div>
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
          <div>
            <GarmentName>{garmentName}</GarmentName>
            <Designer>{designer}</Designer>

            <Intro>
              {descriptions.map((description, index) => (
                <Body styles={{marginBottom: "4px"}} key={index}>
                  {description}
                </Body>
              ))}
              {additionalInfoTitle && additionalInfoDescription && (
                <Accordion
                  title={additionalInfoTitle}
                  description={additionalInfoDescription}
                />
              )}
            </Intro>
          </div>
          <div>
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

            <ActionContainer>
              <PaymentContainer>
                <Feature>price:</Feature>
                <Feature>£{price}</Feature>
              </PaymentContainer>
              <ButtonContainer>
                <PurchaseContainer>
                  <Input>
                    <select name="size" id="size" onChange={handleSizeChange}>
                      {stripeLinks.map((product) => (
                        <option key={product.label} value={product.label}>
                          {product.label.toUpperCase()}
                        </option>
                      ))}
                    </select>
                  </Input>
                </PurchaseContainer>
                <Button onClick={() => window.open(stripeUrl)} text="buy" />
              </ButtonContainer>
            </ActionContainer>
          </div>
        </Details>
      </Layout>
    </>
  );
};

export default ProductDetails;
