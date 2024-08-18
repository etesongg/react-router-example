import "./App.css";

import Homepage from "./page/Homepage";
import Aboutpage from "./page/Aboutpage";
import Productpage from "./page/Productpage";
import ProductDetailpage from "./page/ProductDetailpage";
import Loginpage from "./page/Loginpage";
import Userpage from "./page/Userpage";

import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  const [authenticate, setAuthenticate] = useState(false);
  const PrivateRoute = () => { // 첫글자 대문자이기 때문에 컴포넌트임
    return authenticate == true? <Userpage />: <Navigate to="/login" />;
  }
  return (
  <div>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<Aboutpage />} />  
      <Route path="/product" element={<Productpage />} />
      <Route path="/product/:id" element={<ProductDetailpage />} />
      <Route path="/login" element={<Loginpage />} />
      <Route path="/user" element={<PrivateRoute />} />
    </Routes>
  </div>
  );
}

export default App;
