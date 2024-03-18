import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
export const Data = createContext();

const Total = ({ children }) => {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);
  const [show, setShow] = useState(true);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState("");

  

  const addToCart = (item) => {
    setCart([...cart, item]);
    setShow(false);
  };



  const removeCart = (item) => {
    setCart(cart.filter((ele) => ele.id !== item));
    // setShow(true)
  }

  
  

  const increment=(items)=>{
  console.log(items*10);
  }
 
  


  useEffect(() => {
    setLoading(true);
     fetch("https://practise-be.onrender.com/getshirts")
      .then((res) => res.json())
      .then((data1) => {
        setData(data1);
        setLoading(false);
      })
      .catch((err) => setLoading(false));

  }, []);
  return (
    <div>
      <Data.Provider
        value={{cart,data,loading,cart,addToCart,removeCart,show,setUser,user,increment}}>
          {children}
      </Data.Provider>
    </div>
  );
};

export default Total;
