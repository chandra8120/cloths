import React, { useContext } from "react";
import { useState } from "react";
import DrawerAppBar from "./Main";
import { Button, Stack } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { Data } from "./Total";
import "./home.css"
import Footer from "./Footer";
const Home = () => {
  const { loading, addToCart, data,user} = useContext(Data);
  const [selectedProduct, setSelectedProduct] = useState("");
  

  const handleProduct = (item) => {
    setSelectedProduct(item);
  };

  return (
    <div>
      <div>
        <DrawerAppBar />
      </div>
      {loading ? (
        <center>
          <Stack alignItems={"center"} justifyContent={"center"}>
            <CircularProgress />
            <h4> Laoding....</h4>
          </Stack>
        </center>
      ) : null}

      {selectedProduct === "" ? (
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
          {data.filter((ele,ind)=>ele.title.includes(user)).map((ele) => (
            <div className="image-container"
              style={{
                width: "23%",
                height: "102%",
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
                  width: "90%",
                  height: "200px",
                  marginLeft:"22px"
                }}
              >
                <img
                  onClick={() => handleProduct(ele)}
                  style={{
                    width: "75%",
                    height: "100%",
                    cursor: "pointer",
                  }}
                  src={ele.image}   alt="img"
                />
              </div>
             <div image-container>
              {ele.title}
              {ele.price}
               </div>
              <div style={{ display: "flex", gap: 10 }}>
                
                <Button 
                  sx={{ height: "20%" }}
                  color="secondary"
                  onClick={() => {
                    addToCart(ele);
                    alert("Successfully added cart");
                  }}
                >
                  Add Cart
                </Button>
          
                <Button  onClick={() => handleProduct(ele)}>
                  Details
                </Button>
            
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div style={{ background: "lightblue", marginTop: "-4%" }}>
          <div
            style={{
              background: "lightblue",
              width: "100%",
              marginTop: "10px",
            }}
          >
            <div
              style={{
                width: "20%",
                height: "80%",
                minWidth: "200px",
                boxShadow: "0px 10px 10px 0px black",
                minHeight: "300px",
                borderRadius: "3%",
                marginLeft: "30%",
                background: "white",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "230px",
                  cursor: "pointer",
                }}
              >
                <img
                  style={{
                    width: "100%",
                    height: "100%",
                    cursor: "pointer",
                  }}
                  src={selectedProduct?.image}
                  alt="img"
                />
                {selectedProduct?.title}
                {selectedProduct?.price}
              </div>
            </div>
          </div>
          <Button
            variant="contained"
            sx={{ width: "20%", margin: "1% 30%" }}
            onClick={() => setSelectedProduct("")}
          >
            Close
          </Button>
          
        </div>
      )}

     <Footer />
    </div>
  );
};

export default Home;