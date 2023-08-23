import React from "react";
import DrawerAppBar from "./Main";
import './home.css'
import Shirt from "./Shirt";
import { useState } from "react";
const Products = () => {
  const[show,setShow]=useState(true)
  return (
    <div>
    
      <div>
          <DrawerAppBar />
          </div>
         
    
      { show? <div>
     <Shirt />
    </div>:null
}
    </div>
  );
};

export default Products
