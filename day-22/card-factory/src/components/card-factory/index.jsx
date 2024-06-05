import React from 'react'
import { AddToCartButton, CardDesc, CardTitle, CardWrapper, Image } from './cardFactoryStyle'


function CardFactory({imagePath, description, title, handleAddToCart}) {
  return (
    <CardWrapper>
        <Image src={`${imagePath}`}/>
<CardTitle>{title}</CardTitle>
<CardDesc>{description}</CardDesc>
        <AddToCartButton onClick={()=>handleAddToCart()}>Add to Cart</AddToCartButton>
    </CardWrapper>
  )
}

export default CardFactory