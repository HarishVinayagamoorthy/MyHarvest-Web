// import React from 'react'

// function ProductCard() {
//   return (
//     <div className='product_card_container'>
//         <img src="" alt="product img" />
//         <p className="product_card_title">fruit</p>
//         <p className="product_card_name">orange</p>
//         <p className="product_card_price_weight">($150/1kg)</p>
//     <div className="product_card_product_quantity">
        
//     </div>
//     </div>
//   )
// }

// export default ProductCard





// src/components/ProductCard.js
// import React from 'react';
// import { Card, Button } from 'antd';
// import { ShoppingCartOutlined, HeartOutlined } from '@ant-design/icons';

// const { Meta } = Card;

// const ProductCard = ({ product }) => {
//   return (
//     <Card
//       hoverable
//       style={{ width: 240, margin: '16px' }}
//       cover={<img alt={product.name} src={product.image} />}
//       actions={[
//         <Button icon={<HeartOutlined />} />,
//         <Button icon={<ShoppingCartOutlined />} />
//       ]}
//     >
//       <Meta title={product.name} description={`(₹${product.price}/${product.unit})`} />
//       <div>Delivery by 18 Apr, Thursday</div>
//     </Card>
//   );
// };

// export default ProductCard;


import React, { useState } from 'react';
import { Card, Button, Row, Col, Typography } from 'antd';
import { ShoppingCartOutlined, HeartOutlined, PlusOutlined, MinusOutlined } from '@ant-design/icons';

const { Meta } = Card;
const { Text } = Typography;

const ProductCard = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <Card
      hoverable
      className="product-card"
      cover={<img alt={product.name} src={product.image} />}
      actions={[
        <Button icon={<HeartOutlined />} className="action-button" />,
        <Button icon={<ShoppingCartOutlined />} className="action-button" />
      ]}
    >
      <Meta title={product.name} description={`(₹${product.price}/${product.unit})`} />
      <div>Delivery by 18 Apr, Thursday</div>
      <div className="quantity-controls">
        <Row align="middle" justify="space-between">
          <Col>
            <Button icon={<MinusOutlined />} onClick={decrementQuantity} className="quantity-button" />
          </Col>
          <Col>
            <Text className="quantity-text">{quantity}</Text>
          </Col>
          <Col>
            <Button icon={<PlusOutlined />} onClick={incrementQuantity} className="quantity-button" />
          </Col>
        </Row>
      </div>
    </Card>
  );
};

export default ProductCard;




