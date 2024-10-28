// src/components/ProductGrid.js
import React from 'react';
import { Row, Col } from 'antd';
import ProductCard from './product_card';
import { apple, banana, Fruits, green_papaya } from '@helpers/image_constant';

const products = [
  { name: 'Apple', price: 150, unit: '1kg', image: apple },
  { name: 'Banana', price: 250, unit: '1kg', image: banana },
  { name: 'Fruits', price: 250, unit: '1kg', image: Fruits},
  { name: 'Green Papaya', price: 250, unit: '1kg', image: green_papaya},
  { name: 'Banana', price: 250, unit: '1kg', image: banana },
  { name: 'Fruits', price: 250, unit: '1kg', image: Fruits},
  { name: 'Green Papaya', price: 250, unit: '1kg', image: green_papaya},



  // Add more products here
];

const ProductGrid = () => {
  return (
    <Row gutter={[16, 16]}>
      {products.map((product) => (
        <Col key={product.name} xs={24} sm={12} md={8} lg={8}>
          <ProductCard product={product} />
        </Col>
      ))}
    </Row>
  );
};

export default ProductGrid;
