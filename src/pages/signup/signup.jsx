import { Component, useState } from "react";
import '../signup/signup.css'
import image from '../../assests/bookStoreLoginLogo.png';
import TextField from '@mui/material/TextField';
import { Link, Navigate, useNavigate } from "react-router-dom";
import { UserRegister } from "../../services/userservices";
import { brown } from "@mui/material/colors";

export const Signup = () => {
    const [user, setUser] = useState({
        fullName: '',
        email: '',
        password: '',
        phone: '',
    })
    const [erroObj, setErrorOBJ] = useState({
        fNameError: false,
        fNameHelper: '',
        emailError: false,
        emailHelper: '',
        passError: false,
        passHelper: '',
        mobileHelper: '',
        mobileError: false
    });
    const handleName = (event) => {
        const newvalue = event.target.value;
        setUser({ ...user, fullName: newvalue });
    }
    const handleEmail = (event) => {
        const newvalue = event.target.value;
        setUser({  ...user,email: newvalue })
    }
    const hanldePassword = (event) => {
        const newvalue = event.target.value;
        setUser({ ...user, password: newvalue })

    }
    const handleMobile = (event) => {
        const newvalue = event.target.value;
        setUser({...user,  phone: newvalue })
    }

    const isFNameValid = /^[a-zA-Z ]{2,30}$/;
    const isEmailValid = /^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]+$/;
    const isPassValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const isMobilevalid = /^[6-9]\d{9}$/;

    const navigate=useNavigate();
    const handleSubmit = async (event) => {
        event.preventDefault();
    
        const fullnamevalid = isFNameValid.test(user.fullName);
        const emailValid = isEmailValid.test(user.email);
        const passValid = isPassValid.test(user.password);
        const mobilevalid = isMobilevalid.test(user.phone)

        setErrorOBJ((prevErrors) => ({
            ...prevErrors,
            fNameError: !fullnamevalid,
            fNameHelper: !fullnamevalid ? "Full Name is not valid" : "",
            emailError: !emailValid,
            emailHelper: !emailValid ? "Email is not valid" : "",
            passError: !passValid,
            passHelper: !passValid ? "Password is not valid" : "",
            mobileError: !mobilevalid,
            mobileHelper: !mobilevalid ? "Mobile Number is not valid" : ""
        }));
        console.log(user)
        if(user.fullName!=null&&user.email&&user.password&&user.phone){
            alert("User Registration Successful")
            navigate("/")
        }else{
            alert("Please Fill Details")
        }
        // alert("User Registration Successful")
        // navigate('/')
        
        // let response = await UserRegister(user)
        // console.log(response);
        // const id=response.result._id;
        // localStorage.setItem("token", id); 
    }
    //handletext
    const [text, settext]=useState(false)
    const handletext=()=>{
        settext(true)
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

                        <div className="top-links"  >
                            {/* <Link to="/">LOGIN</Link> */}
                            <Link to={'/'}  style={!text?{textDecoration:"none", color:"black"}:{}} >LOGIN</Link>
                            <span className="link-divider"></span>
                            <Link to={'/signup'}  style={!text?{color:"brown"}:{}}  >SIGNUP</Link>
                        </div >
                        <div className="form-inputs">
                            <div className="label">
                                Full Name<TextField id="outlined-basic" type="text"

                                    value={user.fullName}
                                    error={erroObj.fNameError}
                                    helperText={erroObj.fNameHelper}
                                    onChange={handleName}
                                /></div>
                            <div className="label">Email Id<TextField id="outlined-basic" type="text"

                                value={user.email}
                                error={erroObj.emailError}
                                helperText={erroObj.emailHelper}
                                onChange={handleEmail}
                            /></div>
                            <div className="label">Password<TextField id="outlined-basic" type="password"
                                onChange={hanldePassword}
                                value={user.password}
                                error={erroObj.passError}
                                helperText={erroObj.passHelper}
                            /></div>
                            <div className="label">Mobile Number<TextField id="outlined-basic" type="text" onChange={handleMobile}
                                value={user.phone}
                                error={erroObj.mobileError}
                                helperText={erroObj.mobileHelper}
                            /></div>
                            <div className="label"><button id="submit" onClick={handleSubmit}>Signup</button></div>
                        </div>
                    </div>
                </form>

            </div>
        </div>)

}