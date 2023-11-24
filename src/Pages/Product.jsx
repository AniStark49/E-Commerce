import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrums/Breadcrum';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';
import all_product from '../Components/Assets/all_product';

const Product = () => {
  const {productId} = useParams();
  const product = all_product.find((e)=>e.id===Number(productId))
  console.log(product)
  return (
    <div>
      <Breadcrum product = {product}/>
      <ProductDisplay product = {product}/>
      <DescriptionBox/>
      <RelatedProducts/>
    </div>
  )
}

export default Product
