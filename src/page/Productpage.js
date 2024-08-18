import React from 'react'

import { useSearchParams } from 'react-router-dom'

const Productpage = () => {
  let [query, setQuery] = useSearchParams();
  console.log(query.get("q"))
  return (
    <div>
      <p>Show All Products</p>
    </div>
  )
}

export default Productpage
