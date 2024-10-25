import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link  } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            {/* <MenuIcon /> */}
           <div style={{display:"flex",width:"80%",gap:"10px"}}>
            {<Link to="/category">
            jobs
            </Link>}

            {/* <Link to={"/category"}>
          
            <div style={{color:"white",cursor:"pointer"}}>Category</div> 
            </Link> */}
            {/* <Link to={"/jobs"} >
            <div style={{color:"hite",cursor:"pointer"}}>Job</div>
            </Link> */}
           </div>
            
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <div style={{color:"black",fontSize:"xx-large", textAlign:"center"
            }}>
           HiringMine

            </div>
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
