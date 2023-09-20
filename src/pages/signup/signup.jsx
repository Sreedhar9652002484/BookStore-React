import { Component, useState } from "react";
import '../signup/signup.css'
import image from '../../assests/bookStoreLoginLogo.png';
import TextField from '@mui/material/TextField';
import { Link } from "react-router-dom";


export const Signup=()=>{

        const [user, setUser]=useState({
            fullname:'',
            isfullname:false,
            email:'',
            isemail:false,
            password:'',
            ispassword:false,
            mobile:'',
            ismobile:false
        })
    
    const handleName=(event)=>{
        const newvalue=event.target.value;
        setUser({fullname:newvalue});
    }
   const  handleEmail=(event)=>{
        const newvalue = event.target.value;
        setUser({email:newvalue})

    }
    const hanldePassword=(event)=>{
        const newvalue = event.target.value;
        setUser({password:newvalue})

    }
    const handleMobile=(event)=>{
        const newvalue = event.target.value;
        setUser({mobile:newvalue})
    }

    const isFNameValid = /^[a-zA-Z ]{2,30}$/;
    const isEmailValid = /^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]+$/;
    const isPassValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const isMobilevalid=/^[6-9]\d{9}$/;

   const handleSubmit=(event)=>{
        setUser({isfullname:this.isFNameValid.test(this.firstname)})
    }
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
                            {/* <Link to="/">LOGIN</Link> */}
                            <Link to={'/'}>LOGIN</Link>                          
                            <span className="link-divider"></span>
                            <Link to={'signup'}>SIGNUP</Link>
                        </div >
                        <div className="form-inputs">
                        <div className="label">
                            Full Name<TextField id="outlined-basic"  type="text" onChange={handleName} /></div>

                        <div className="label">Email Id<TextField id="outlined-basic" type="text" onChange={handleEmail} /></div>
                        <div  className="label">Password<TextField id="outlined-basic" type="password" onChange={hanldePassword}/></div>
                        <div  className="label">Mobile Number<TextField id="outlined-basic" type="text" onChange={handleMobile}/></div>
                        <div  className="label"><button id="submit" onClick={handleSubmit}>Signup</button></div>
                    </div>
                    </div>
                </form>

            </div>
    </div>)
    
}