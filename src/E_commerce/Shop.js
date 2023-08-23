import React from "react";
import DrawerAppBar from "./Main";
import { Box, Card, Typography } from "@mui/material";
import './home.css'
import Shirt from "./Shirt";
import { useState } from "react";
const Shop = () => {
  const[show,setShow]=useState(false)
  return (
    <div>
    
      <div>
          <DrawerAppBar />
          </div>
         
      
      <Card
        sx={{
          width: "95%",
          marginLeft: "3%",
          marginTop:"2%",
          height:"220px",
                   
        }}
      >
        <Box sx={{display:"flex",gap:15}}>
        <Box id='sek' sx={{ marginLeft: "10%",display: "flex",flexDirection: "column", gap:2,}}>
          <Typography variant="h6" component="div"> CLOTHS</Typography>
          <Typography  id='cha' sx={{color:"text.secondary",cursor:"pointer",hover:{background:"red"}}} variant="body2" onClick={()=>setShow(true)}>SHIRTS</Typography>
          <Typography sx={{color:"text.secondary",cursor:"pointer"}}  variant="body2">T-SHIRTS</Typography>
          <Typography sx={{color:"text.secondary",cursor:"pointer"}} variant="body2">PANTS</Typography>
          <Typography sx={{color:"text.secondary",cursor:"pointer"}}  variant="body2">JEANS</Typography>
          <Typography sx={{color:"text.secondary",cursor:"pointer"}}  variant="body2">HOODIES</Typography>
        </Box>

      <Box id='sek' sx={{display:"flex",flexDirection:"column",gap:2}}>
      <Typography variant="h6">
        FACIAL PRODUCTS
      </Typography>
      <Typography sx={{color:"text.secondary",cursor:"pointer"}}  variant="body2">
        CREAMS
      </Typography >
      <Typography sx={{color:"text.secondary",cursor:"pointer"}}  variant="body2">
        BRUSHES
      </Typography>
      <Typography sx={{color:"text.secondary",cursor:"pointer"}}  variant="body2">
        MAKEUP KIT
      </Typography>
      <Typography sx={{color:"text.secondary",cursor:"pointer"}}  variant="body2">
        TUBES
      </Typography>
      <Typography sx={{color:"text.secondary",cursor:"pointer"}}  variant="body2">
        LIPSTICKS
      </Typography>
    </Box>

<Box id='sek' sx={{display:'flex',flexDirection:"column",gap:2}}>
  <Typography variant="h6">
    ELECTRONICS
  </Typography>
  <Typography  sx={{color:"text.secondary",cursor:"pointer"}}  variant="body2">
    EAR PHONES    
  </Typography>
  <Typography  sx={{color:"text.secondary",cursor:"pointer"}}  variant="body2">
    AIR DOPS
  </Typography>
  <Typography  sx={{color:"text.secondary",cursor:"pointer"}}  variant="body2">
    WIRELESS EAR PHONES
  </Typography>
  <Typography  sx={{color:"text.secondary",cursor:"pointer"}}  variant="body2">
    POUCHES
  </Typography>
  <Typography  sx={{color:"text.secondary",cursor:"pointer"}}  variant="body2">
  SMART WATCHES
  </Typography>
</Box>

<Box id='sek' sx={{display:'flex',flexDirection:"column",gap:2}}>
  <Typography variant="h6">
    MOBILE PHONES
  </Typography>
  <Typography  sx={{color:"text.secondary",cursor:"pointer"}}  variant="body2">
    SAMSUNG  
  </Typography>
  <Typography  sx={{color:"text.secondary",cursor:"pointer"}}  variant="body2">
    REDMI
  </Typography>
  <Typography  sx={{color:"text.secondary",cursor:"pointer"}}  variant="body2">
    VIVO
  </Typography>
  <Typography  sx={{color:"text.secondary",cursor:"pointer"}}  variant="body2">
    REAL ME
  </Typography>
  <Typography  sx={{color:"text.secondary",cursor:"pointer"}}  variant="body2">
    OPPO
  </Typography>
</Box>
      

    </Box>
      </Card>


      { show? <div>
     <Shirt />
    </div>:null
}
    </div>
  );
};

export default Shop;
