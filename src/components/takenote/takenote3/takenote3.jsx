import { LocalActivityOutlined, LocationOnOutlined } from "@mui/icons-material"
import { Avatar, IconButton, Link } from "@mui/material"
import image from '../../../assests/bhagavadbook.jpeg'
import stylecss from '../takenote3/takenote3.css'

export const Cart=()=>{
    return(
        <div className="cart">
            <div className="link1">
                <Link>Home</Link>
                <Link> / My Cart</Link>
            </div>

            <div className="mycart">
                <div className="location"><p id="mycarttext">My cart (1) </p>
                <div className="locdiv"><IconButton><LocationOnOutlined/></IconButton><span>Use your current Location</span></div>
                </div>
                <div className="buttonimg">
                <div className="geetacart">
                    <img src={image} id="imgcart" alt="image"></img>
                    <div className="paradiv">
                    <p id="bookname">Bhagavadh Geeta</p>
                    <p id="author">by Bhakthi Vedant Swami Prabhupada</p>
                    <p id='price3'>Rs.499 < span id='rate2'>Rs.699</span></p>
                    <div className="avatar"><Avatar>-</Avatar><input id="input2"></input><Avatar>+</Avatar> <button id="remove">Remove</button></div>
                    </div>
                </div>
               
                </div>
                <div ><button id="placebutton">PLACE ORDER</button></div>
                
            
            </div>
            <div className="address">
                <p id="address">Address Details</p>
            </div>
            <div className="order">
                <p id="order">Order Summary</p>
            </div>
        </div>
    )
}