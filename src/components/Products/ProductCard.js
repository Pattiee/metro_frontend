import React from 'react';
import './product-styles.css';
import { Card, CardHeader, CardTitle, CardSubtitle, CardImg, CardBody, CardText, CardFooter } from 'react-bootstrap';

const ProductCard = ({ product }) => {
  return (
    <Card className='card col col-lg-3 col-md-4 col-sm-6 mx-auto stretched-link flex flex-column p-1 m-1' key={product?.id}>
      <CardImg className='card-img-top' src='' alt={product?.name}/>
      <CardBody className='card-body'>
        <CardTitle className='card-title'>{product?.name}</CardTitle>
        <CardSubtitle className='card-subtitle'>{product?.price}/-</CardSubtitle>
      </CardBody>
      <CardText className='card-text'>
        <small>Stock: {product?.stock}</small>
      </CardText>
    </Card>
  )
}

export default ProductCard
