import React from 'react'

import { Link, useNavigate } from 'react-router-dom'

const HomePage = () => {
    const navigate = useNavigate();
    const goProductpage = () => {
        navigate("/product?q=pants")
    }
  return (
    <div>
      <p>homepage</p>
      <Link to="/about">go to aboutpage</Link>
      <button onClick={goProductpage}>go to productpage</button>
    </div>
  )
}

export default HomePage