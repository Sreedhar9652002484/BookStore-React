import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import stylecss from '../navbar/navbar.css'
import Logo from '../../assests/BookLogo.png'
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { AppBar, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { AccountCircle, Person3Outlined, PersonOutline, ShoppingCartOutlined } from '@mui/icons-material';
import { Cart } from '../bookstorecomp/Cart/cart';
import { Mycontext} from '../bookstorecomp/addtobag/addtobag';
import { useContext } from 'react';


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: 'white',
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    color:'gray',
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        color:'grey',
        
        [theme.breakpoints.up('md')]: {
            width: '55ch',
        },
    },
}));

export default function Navbar() {
 const data =useContext(Mycontext)
 console.log("count",data);

      const [anchorEl, setAnchorEl] = React.useState(null);
      const handleClose = () => {
        setAnchorEl(null);
      };
      const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
      const navigate = useNavigate();
      const SignoutHandler=()=>{
        if(localStorage.key){
        localStorage.removeItem('token');
          navigate('/')
        }
      }
      const navigatecart=useNavigate();
      const handlecart=()=>{
        navigatecart('/cart')
      }
      const handlebook=()=>{
        navigatecart('/dashboard')
      }
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
                <div className='booklogo'  onClick={handlebook}>
                <img id='image1' src={Logo} alt='logo'></img>
                <p id='textbook' >Bookstore</p>
                </div>
                
              </Typography>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon/>
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ 'aria-label': 'search' }}
                />
              </Search>
              <div className='profile'>
              <IconButton
                // size="large"
                // aria-label="account of current user"
                // // aria-controls="menu-appbar"
                // // aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
               
              >
            
                <PersonOutline  />
             
               
              </IconButton>
              <span id='profile'> Profile</span> 
              </div>
              
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                 
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>My Profile</MenuItem>
                <MenuItem onClick={SignoutHandler}>SignOut</MenuItem>
              </Menu>
              <div  className='cart'> 
              <div className='data'>
              <IconButton id='icon' onClick={handlecart} >< ShoppingCartOutlined  /></IconButton>
              {data>=1?<p id='data'>{data}</p>:''}
              </div>
              <span id='cart'> Cart</span> 
              </div>
              </Toolbar>
      </AppBar>
      
    </Box>
       
       
    </div>
    );
}
