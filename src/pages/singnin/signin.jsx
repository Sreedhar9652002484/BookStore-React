import { Component } from "react";
import css from '../singnin/signin.css'
import image from '../../assests/bookStoreLoginLogo.png';
import TextField from '@mui/material/TextField';
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { UserLogin, UserRegister } from "../../services/userservices";
import { Style } from "@mui/icons-material";


export const Signin = () => {
    const [user, setUser] = useState({
        email: '',
        password: '',
    })
    const [erroObj, setErrorOBJ] = useState({
        emailError: false,
        emailHelper: '',
        passError: false,
        passHelper: '',
    });
    const [formSubmitted, setFormSubmitted] = useState(false);
    const isEmailValid = /^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]+$/;
    const isPassValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{7,}$/;

    const handleEmail = (event) => {
        const newvalue = event.target.value;
        setUser({ ...user, email: newvalue })
    }
    const hanldePassword = (event) => {
        const newvalue = event.target.value;
        setUser({ ...user, password: newvalue })
    }

    //handletext
    const [text, settext]=useState(false)
    const handletext=()=>{
        settext(true)
    }

    const navigate = useNavigate();
    const handleSubmit = async (event) => {
        event.preventDefault();
        let response=await UserLogin(user);
        localStorage.setItem("token", response.data.result.accessToken);
        console.log(response.data.result.accessToken)
        let token=localStorage.getItem("token")
        if(token!=null){
            navigate('/dashboard')
        }
        const emailValid = isEmailValid.test(user.email);
        const passValid = isPassValid.test(user.password);
        setErrorOBJ((prevErrors) => ({
            ...prevErrors,
            emailError: !emailValid,
            emailHelper: !emailValid ? "Email is not valid" : "",
            passError: !passValid,
            passHelper: !passValid ? "Password is not valid" : ""
        }));

        if (emailValid&&passValid) {
            setFormSubmitted(true)
            console.log("Form submitted");
            console.log(user);        }
    }
    return (
        <div className="body">
            <div className="MainContainer">
                <div className="image">
                    <img id="image" src={image} alt="logo" />
                    <p id="text">ONLINE BOOK SHOPPING</p>
                </div>
                <form className="formcontainer" onSubmit={handleSubmit}  >
                    <div className="form1">
                       <div className="top-links" >
                            <Link to="/" style={!text?{color:"brown"}:{}}>LOGIN</Link>
                            <span className="link-divider"></span>
                            <Link to="/signup" style={!text? { textDecoration:'none', color:'black'}:{}} >SIGNUP</Link>
                        </div > 
                    
                        <div className="form-inputs">

                            <div className="label">Email Id<TextField id="outlined-basic" type="text"
                                onChange={handleEmail}

                                value={user.email}
                                error={erroObj.emailError}
                                helperText={erroObj.emailHelper}
                            /></div>
                            <div className="label">Password<TextField id="outlined-basic" type="password"
                                onChange={hanldePassword}
                                value={user.password}
                                error={erroObj.passError}
                                helperText={erroObj.passHelper}
                            />
                                <div className="forgetlink"><Link id="forget1" to="/forgetpassword">Forget Password?</Link></div>
                            </div>
                            <div id="outlined-basic"><button id="submit">Signin</button></div>
                            <div className="hrtag"><hr /><span>OR</span><hr /></div>
                            <div className="facegoogle">
                                <div className="label" ><button id="facebook">Facebook</button></div>
                                <div className="label"><button id="google">Google</button></div>
                            </div>

                        </div>
                    </div>
                </form>

            </div>
        </div>
    )

}