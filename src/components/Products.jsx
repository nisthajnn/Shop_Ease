import React from 'react';
import { topProductAPI } from '../APIfolder/topProductAPI';
import Product from './Product';
const Products = () => {
  return <div className='p-5 flex flex-wrap'>
      {
          topProductAPI.map((product, index)=>(
              <Product item={product} key={index}/>
          ))
      }
  </div>;
};

export default Products;