import { Component } from "react";
import '../signup/signup.css'
import image from '../../assests/bookStoreLoginLogo.png';
import TextField from '@mui/material/TextField';
import { Link } from "react-router-dom";


export class Signup extends Component {

        state={
            fullname:'',
            isfullname:false,
            email:'',
            isemail:false,
            password:'',
            ispassword:false,
            mobile:'',
            ismobile:false
        }
    
    handleName=(event)=>{
        const newvalue=event.target.value;
        this.setState({fullname:newvalue});
    }
    handleEmail=(event)=>{
        const newvalue = event.target.value;
        this.setState({email:newvalue})

    }
    hanldePassword=(event)=>{
        const newvalue = event.target.value;
        this.setState({password:newvalue})

    }
    handleMobile=(event)=>{
        const newvalue = event.target.value;
        this.setState({mobile:newvalue})
    }

     isFNameValid = /^[a-zA-Z ]{2,30}$/;
    isEmailValid = /^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]+$/;
    isPassValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    isMobilevalid=/^[6-9]\d{9}$/;

    handleSubmit=(event)=>{
        this.setState({isfullname:this.isFNameValid.test(this.firstname)})
    }
    render() {
        return (
            <div className="body">
            <div className="MainContainer">
                <div className="image">
                    <img id="image" src={image} alt="logo" />
                    <p id="text">ONLINE BOOK SHOPPING</p>
                </div>
                <form className="formcontainer">
                    <div className="form">
                        
                        {/* <div className="top-links">
                            <Link to="/">LOGIN</Link>
                            <Link to={'/'}>LOGIN</Link>                          
                            <span className="link-divider"></span>
                            <Link to={'signup'}>SIGNUP</Link>
                        </div > */}
                        <div className="form-inputs">
                        <div className="label">
                            Full Name<TextField id="outlined-basic"  type="text" onChange={this.handleName} /></div>

                        <div className="label">Email Id<TextField id="outlined-basic" type="text" onChange={this.handleEmail} /></div>
                        <div  className="label">Password<TextField id="outlined-basic" type="password" onChange={this.hanldePassword}/></div>
                        <div  className="label">Mobile Number<TextField id="outlined-basic" type="text" onChange={this.handleMobile}/></div>
                        <div  className="label"><button id="submit" onClick={this.handleSubmit}>Signup</button></div>
                    </div>
                    </div>
                </form>

            </div>
            </div>)
    }
}