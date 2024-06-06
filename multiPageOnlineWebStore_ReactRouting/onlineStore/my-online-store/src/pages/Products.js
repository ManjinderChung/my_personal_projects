// Products.js
import React, { useState } from "react";
import {
  Card,
  Container,
  Row,
  Col,
  Dropdown,
  DropdownButton,
  Button,
} from "react-bootstrap";
import { useTotalPrice } from "../components/TotalPriceContext";
import TotalPrice from "../components/TotalPrice";
import FootballTop from "./FootballTop.jpg"

const Products = () => {
  // Array of product objects
  const products = [
    {
      id: 1,
      name: "Football Shirt 1",
      image: FootballTop,
      description: "Description for Shirt 1",
      price: 29.99,
      colours: ["Red", "Blue", "Green"],
    },
    {
      id: 2,
      name: "Football Shirt 2",
      image: FootballTop,
      description: "Description for Shirt 2",
      price: 34.99,
      colours: ["Red", "Blue", "Green"],
    },
    {
      id: 3,
      name: "Football Shirt 3",
      image: FootballTop,
      description: "Description for Shirt 3",
      price: 39.99,
      colours: ["Red", "Blue", "Green"],
    },
    {
      id: 4,
      name: "Football Shirt 4",
      image: FootballTop,
      description: "Description for Shirt 4",
      price: 44.99,
      colours: ["Red", "Blue", "Green"],
    },
    {
      id: 5,
      name: "Football Shirt 5",
      image: FootballTop,
      description: "Description for Shirt 5",
      price: 49.99,
      colours: ["Red", "Blue", "Green"],
    },
    {
      id: 6,
      name: "Football Shirt 6",
      image: FootballTop,
      description: "Description for Shirt 6",
      price: 54.99,
      colours: ["Red", "Blue", "Green"],
    },
    {
      id: 7,
      name: "Football Shirt 7",
      image: FootballTop,
      description: "Description for Shirt 7",
      price: 59.99,
      colours: ["Red", "Blue", "Green"],
    },
    {
      id: 8,
      name: "Football Shirt 8",
      image: FootballTop,
      description: "Description for Shirt 8",
      price: 64.99,
      colours: ["Red", "Blue", "Green"],
    },
    {
      id: 9,
      name: "Football Shirt 9",
      image: FootballTop,
      description: "Description for Shirt 9",
      price: 69.99,
      colours: ["Red", "Blue", "Green"],
    },
    {
      id: 10,
      name: "Football Shirt 10",
      image: FootballTop,
      description: "Description for Shirt 10",
      price: 74.99,
      colours: ["Red", "Blue", "Green"],
    },
  ];

  // State to keep track of the selected colour for each product
  const [selectedColours, setSelectedColours] = useState(
    products.reduce((acc, product) => {
      acc[product.id] = product.colours[0]; // Default to the first colour
      return acc;
    }, {})
  );

  // Get total price and setTotalPrice function from context
  const { totalPrice, setTotalPrice } = useTotalPrice();

  // Function to handle the selection of a colour from the dropdown
  const handleSelect = (productId, colour) => {
    setSelectedColours((prevSelectedColours) => ({
      ...prevSelectedColours,
      [productId]: colour,
    }));
  };

  // Function to handle the 'Buy' button click
  const handleBuy = (price) => {
    setTotalPrice((prevTotalPrice) => prevTotalPrice + price);
  };

  return (
    <Container>
      <h1>Products</h1>
      {/* Display the total price component */}
      <TotalPrice totalPrice={totalPrice} />
      <Row>
        {products.map((product) => (
          <Col key={product.id} sm={12} md={6} lg={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src={product.image} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text>£{product.price.toFixed(2)}</Card.Text>
                {/* Dropdown to select product colour */}
                <DropdownButton
                  id={`dropdown-${product.id}`}
                  title={selectedColours[product.id]} // Display the currently selected colour
                  onSelect={(e) => handleSelect(product.id, e)} // Handle the selection of a new colour
                >
                  {product.colours.map((colour, index) => (
                    <Dropdown.Item key={index} eventKey={colour}>
                      {colour}
                    </Dropdown.Item>
                  ))}
                </DropdownButton>
                {/* Buy button */}
                <Button
                  variant="primary"
                  className="mt-2"
                  onClick={() => handleBuy(product.price)}
                >
                  Buy
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Products;
