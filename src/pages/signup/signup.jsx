import { Component } from "react";
import '../signup/signup.css'
import image from '../../assests/bookStoreLoginLogo.png';
import TextField from '@mui/material/TextField';
import { Link } from "@mui/material";

export class Signup extends Component {
    constructor(props) {
        super(props)

    }
    render() {
        return (
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
                        <div className="label">
                            Full Name<TextField id="outlined-basic"  type="text" /></div>

                        <div className="label">Email Id<TextField id="outlined-basic" type="text" /></div>
                        <div  className="label">Password<TextField id="outlined-basic" type="password" /></div>
                        <div  className="label">Mobile Number<TextField id="outlined-basic" type="text" /></div>
                        <div  className="label"><button id="submit">Signup</button></div>
                    </div>
                    </div>
                </form>

            </div>)
    }
}