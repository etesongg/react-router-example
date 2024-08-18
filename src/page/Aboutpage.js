import React from 'react'

import { useNavigate } from 'react-router-dom'

const Aboutpage = () => {
    const navigate = useNavigate()
    
    const goToHomepage = () => {
        navigate("/")
    }
  return (
    <div>
      <p>aboutpage</p>
      <button onClick={goToHomepage}>go to homepage</button>
    </div>
  )
}

export default Aboutpage
