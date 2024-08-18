import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetailpage = () => {
    const {id} = useParams();
  return (
    <div>
       <p>Show Product Detail {id}</p>
    </div>
  )
}

export default ProductDetailpage
