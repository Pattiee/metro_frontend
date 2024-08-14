import React from 'react';
import ProductCard from './ProductCard';
import { CardGroup } from 'react-bootstrap';
import './product-styles.css';

const ProductsCategory = ({ categoryName, products }) => {
  return (
    <section className='section container-fluid p-3 category-section'>
      <legend>{categoryName}</legend>
      <div className='card-deck row m-0 flex flex-row'>
        { products?.map((product, index) =>  <ProductCard product={product}/>)}
      </div>
    </section>
  )
}

export default ProductsCategory;