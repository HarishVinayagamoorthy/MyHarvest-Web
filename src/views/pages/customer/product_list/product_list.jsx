// import ProductCategoryList from '@views/components/customer/product_list/product_category_list'
// import React from 'react'

// function ProductList() {
//   return (
//     <>
//     <div>
// <h4>Home/Fruits</h4>
// <ProductCategoryList/>
    



//     </div>
//     </> )
// }

// export default ProductList









// src/components/MainContainer.js
import React from 'react';
import { Grid, Container } from '@mui/material';
import Sidebar from '../../../components/customer/product_list/product_category_list';
import ProductGrid from '../../../components/customer/product_list/product_card_list';

const ProductList = () => {
  return (
    <Container>

      
      <Grid container spacing={3}>
        <Grid item xs={12} sm={3}>
          <Sidebar />
        </Grid>
        <Grid item xs={12} sm={9}>
          <ProductGrid />
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductList;
