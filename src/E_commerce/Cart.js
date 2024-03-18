import React, { useContext } from "react";
import { Data } from "./Total";
import DrawerAppBar from "./Main";
import { Button } from "@mui/material";


const Cart = () => {
  const { cart,removeCart, increment } = useContext(Data);
  return (
    <div>
       <div >
      <DrawerAppBar />
      </div>
     
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          gap: 20,
          minWidth: "280px",
        }}
      >
        {cart?.length > 0 ? (
          <>
            {cart.map((ele) => (
              <div
                style={{
                  width: "20%",
                  minWidth: "200px",
                  boxShadow: "0px 10px 10px 0px black",
                  minHeight: "300px",
                  borderRadius: "3%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                key={ele.id}
              >
                <div
                  style={{
                    width: "100%",
                    height: "230px",
                  }}
                >
                  <img
                    style={{
                      width: "100%",
                      height: "100%",
                      cursor: "pointer",
                    }}
                    src={`data:image/png;base64,${ele.image}`} 
                    alt="img"
                  />
                </div>

                {ele.title}
                {ele.price}
                <Button
                  variant="contained"
                  color="secondary"
                   onClick={()=>removeCart(ele.id)}
                >
                  Remove Item
                </Button>
               
               <div>
                <button onClick={()=>increment(ele)}>-</button>
                <button onClick={()=>increment(ele)}>+</button>
               </div>
              
              </div>
            ))}
          </>
        ) : (
          
          <h1>Cart is Empty !!</h1>
          
           )}
        
       
      </div>
    </div>
  );
};

export default Cart;
