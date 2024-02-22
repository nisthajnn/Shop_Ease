import React from 'react';
import { ApiCategories } from '../APIfolder/categoryAPI';
import Category from './Category';
const Categories = () => {
  return <div className='flex justify-between items-center p-5 mobile:flex-col poppins-extrabold'>
    {ApiCategories.map((category, index)=>(
        <Category item={category} key={index}/>
    ))}
  </div>;
};

export default Categories;