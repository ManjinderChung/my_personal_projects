import React from "react";
import { Figure, Container, Row, Col } from "react-bootstrap";
import TotalPrice from "../components/TotalPrice";
import { useTotalPrice } from "../components/TotalPriceContext";
import "./About.css"; // Import the custom CSS
import FootballStore from "./FootballStore.jpg"
import InsideStore from "./InsideStore.jpg"
import OutsideShop from "./OutsideShop.jpg"

const About = () => {
  // Get total price
  const { totalPrice } = useTotalPrice();

  return (
    <Container className="about-container">
      {/* Display the total price component */}
      <TotalPrice totalPrice={totalPrice} />

      <h1 className="about-title">About Us</h1>

      {/* Store logo */}
      <Figure>
        <Figure.Image
          className="about-logo"
          width={171}
          height={180}
          alt="Store Logo"
          src={FootballStore}
        />
        <Figure.Caption className="text-center">Our Store</Figure.Caption>
      </Figure>

      {/* Short description of the store */}
      <p className="about-description">
        Welcome to our online store! We offer a wide range of high-quality
        football shirts and accessories. Our mission is to provide our customers
        with the best shopping experience and the highest quality products.
      </p>

      {/* Images of the store */}
      <Row className="about-images">
        <Col md={6}>
          <Figure>
            <Figure.Image
              width={300}
              height={200}
              alt="Store Front"
              src={OutsideShop}
            />
            <Figure.Caption>Our Store Front</Figure.Caption>
          </Figure>
        </Col>
        <Col md={6}>
          <Figure>
            <Figure.Image
              width={300}
              height={200}
              alt="Inside the Store"
              src={InsideStore}
            />
            <Figure.Caption>Inside the Store</Figure.Caption>
          </Figure>
        </Col>
      </Row>

      {/* Contact information */}
      <div className="about-contact">
        <h2>Contact Us</h2>
        <p>Email: contact_me@theonlinestore.com</p>
        <p>Phone: +44 1234 567890</p>
        <p>Address: 123 Football Street, Glasgow, Scotland</p>
      </div>
    </Container>
  );
};

export default About;
