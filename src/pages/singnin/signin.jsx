import { Component } from "react";
import css from '../singnin/signin.css'
import image from '../../assests/bookStoreLoginLogo.png';
import TextField from '@mui/material/TextField';
import { Link } from "react-router-dom";


export const Signin=()=> {
   
        return (
            <div className="body">
            <div className="MainContainer">
                <div className="image">
                    <img id="image" src={image} alt="logo" />
                    <p id="text">ONLINE BOOK SHOPPING</p>
                </div>
                <form className="formcontainer">
                    <div className="form">
                        <div className="top-links">
                            <Link to="/">LOGIN</Link>
                            <span className="link-divider"></span>
                            <Link to="/signup">SIGNUP</Link>
                        </div >
                        <div className="form-inputs">
                
                        <div className="label">Email Id<TextField id="outlined-basic" type="text" /></div>
                        <div  className="label">Password<TextField id="outlined-basic" type="password" />
                        <Link sx={{textAlign:'right', textDecoration:'none', color:'gray', fontSize:'0.9rem'}} to="/forgetpassword">Forget Password?</Link>
                        </div>
                        <div  id="outlined-basic"><button id="submit">Signup</button></div>
                        <span>----------- OR ------------</span>
                        <div className="facegoogle">
                        <div  className="label" ><button id="facebook">Facebook</button></div>
                        <div  className="label"><button id="google">Google</button></div>
                        </div>

                    </div>
                    </div>
                </form>

            </div>
            </div>)
    
}