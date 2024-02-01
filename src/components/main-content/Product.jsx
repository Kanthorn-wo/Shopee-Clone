import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import ProductList from './ProductList';
import { Container, Row, Col, Form } from 'react-bootstrap';

const Product = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`https://dummyjson.com/products`);
      setProducts(response.data.products);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredProducts =
    selectedCategory === 'all'
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <BackgroundColor>
      <MainContainer>
        <Container>
          <Row>
            <Col>
              <h3 className='mt-4'>รายการสินค้า</h3>

              <Form.Group controlId="category" className="mt-3">
                <Form.Label style={{ marginRight: '10px' }}>เลือกหมวดหมู่:</Form.Label>
                <Form.Control as="select" value={selectedCategory} onChange={handleCategoryChange}>
                  <option value="all">All Categories</option>
                  <option value="smartphones">Smartphones</option>
                  <option value="laptops">Laptops</option>
                  <option value="skincare">Skincare</option>
                  <option value="fragrances">Fragrances</option>
                  <option value="home-decoration">Home-Decoration</option>
                  <option value="groceries">Groceries</option>
                </Form.Control>
              </Form.Group>

              <ProductList products={filteredProducts} />
            </Col>
          </Row>
        </Container>
      </MainContainer>

      <Line />
    </BackgroundColor>
  );
};

export default Product;
const BackgroundColor = styled.div`
  width: 100%;
  background-color: #F5F5F5;
`
const MainContainer = styled.div`
  max-width: 1200px;
  margin: 30px auto 0 auto;
  width: 100%;
  padding: 0;
  color: black;
  
`;

const Line = styled.div`
margin-top: 40px;
border-top: 4px solid #ee4d2d;
`


