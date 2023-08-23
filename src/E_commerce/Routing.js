import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Shop from './Shop'
import Shirt from './Shirt'
import Cart from './Cart'
import Products from './Products'


const Routing = () => {

  return (
    <div>
 <BrowserRouter>
 <Routes>
   <Route path="/" element={<Home/>}/>
   <Route path="home" element={<Home/>}/>
   <Route path="shop" element={<Shop/>}/>
   <Route path="products" element={<Products/>}/>
   <Route path="Cart" element={<Cart/>}/>
   <Route path="shirt" element={<Shirt/>}/>
   
 </Routes>
 </BrowserRouter>
    </div>
  )
}

export default Routing
