import { LocalActivityOutlined, LocationOnOutlined } from "@mui/icons-material"
import { Avatar, IconButton, Link } from "@mui/material"
import image from '../../../assests/bhagavadbook.jpeg'
import stylecss from '../takenote3/takenote3.css'
import style from '../takenote5/takenote5.css'
import { useNavigate } from "react-router-dom"

export const OrderSummary=()=>{

    const navigate=useNavigate();
    const handleCheckout=()=>{
        navigate('/ordersuccessful')

    }
    return(
        <div className="cart1">
            <div className="link2">              
            </div>
            <div className="mycart">
                <div className="location3"><p id="mycarttext2">Order Summary</p>
                </div>
                <div className="buttonimg">
                <div className="geetacart">
                    <img src={image} id="imgcart" alt="image"></img>
                    <div className="paradiv">
                    <p id="bookname">Bhagavadh Geeta</p>
                    <p id="author">by Bhakthi Vedant Swami Prabhupada</p>
                    <p id='price3'>Rs.499 < span id='rate2'>Rs.699</span></p>
                    </div>
                </div>
               
                </div>
                <div ><button onClick={handleCheckout} id="placebutton">CHECKOUT</button></div>
                </div>
        </div>
    )
}