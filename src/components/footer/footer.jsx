import * as React from 'react';
import Box from '@mui/material/Box';
import Logo from '../../assests/BookLogo.png'
import { AppBar, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material';

export default function NavbarForget() {
   
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClose = () => {
      setAnchorEl(null);
    };
    const handleMenu = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
  return (
      <div className='main'>
      
      <Box  >
        <AppBar style={{display:'fixed'}}>
          <Toolbar className='appbar'>
            <Typography id='typo'
              variant="h6"
              noWrap
              sx={{ display: { xs: 'none', sm: 'block' } }}
            >
              
            </Typography>
            </Toolbar>
    </AppBar>
    
  </Box>
  </div>
  );
}
