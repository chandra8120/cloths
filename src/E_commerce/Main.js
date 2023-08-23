import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Avatar, Badge, TextField } from "@mui/material";
import { Data } from "./Total";


const drawerWidth = 240;
const navItems = ["Home", "Shop", "Products", "Cart"];

function DrawerAppBar(props) {
  const {cart,user,setUser}=React.useContext(Data)
  const navigate = useNavigate();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center"}}>
      <Typography variant="h6" sx={{ my: 2 }}>
      <Avatar>
      <img src="https://img.freepik.com/free-vector/letter-k-logo-concept-your-royal-brand_1017-33266.jpg?w=2000" width="100%" alt='cha' />
       </Avatar>
           
      </Typography>
      <Divider />
      <List id="items">
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center" }}
            
              onClick={() => navigate("/" + item)}
            >
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    
    <Box>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar sx={{ background: "linear-gradient(to left, #642EFE 0%, #042483 100%)",minWidth:"500px",width:"100%"}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block", cursor: "pointer" },
            }}
            onClick={() => navigate("/")}
          >
            <Avatar>
              <img src="https://img.freepik.com/free-vector/letter-k-logo-concept-your-royal-brand_1017-33266.jpg?w=2000" width="100%" alt="chaa" />
            </Avatar>
           
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
          <TextField sx={{width:"35%",height:'5%'}} id="filled-basic" placeholder="search item"  name="user" value={user} onChange={(e)=>setUser(e.target.value)}/>
            {navItems.map((item) => (
              <Button
                key={item}
                sx={{ color: "#fff" }}
                onClick={() => navigate("/" + item)}
              >
                {item === "Cart" ? (
                  <Badge badgeContent={cart?.length} color="success">
                    <ShoppingCartIcon />
                  </Badge>
                ) : item}
              </Button>
            ))}
          </Box>
         
            
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
          
        </Drawer>
      </Box>
      <div style={{width:"100%",marginTop:60, height: "50px",background: "linear-gradient(to left, #33ccff 0%, #ff99cc 100%)" }}>
        </div>
    </Box>
    
    
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
