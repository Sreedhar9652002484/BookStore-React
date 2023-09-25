import { LocalActivityOutlined, LocationOnOutlined } from "@mui/icons-material"
import { Avatar, IconButton } from "@mui/material"
import image from '../../../assests/bhagavadbook.jpeg'
import stylecss from './cart.css'
import { Link } from "react-router-dom"
import { useContext, useState } from "react"
import { CustomerDetails } from "../CustomerDetails/customerdetails"
import { OrderSummary } from "../OrderSummanry/ordersummary"
import { BookContext } from "../BookDetails/bookdetails"
import { AddToBag } from "../addtobag/addtobag"

export const Cart=()=>{


    const selectedbook=useContext(BookContext);
    console.log("datata", selectedbook)

    const [address, setAddress]=useState(false)
    const handleplaceOrder=()=>{
        setAddress(true);
    }
    const[closeorder, setClose]=useState(false)
    const handleordersummary=(data)=>{ 
        setClose(data)
    }
    return(
        <div className="cart">
            <div className="link1"> 
                <Link to='/dashboard' >Home</Link>
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
                    <p id="bookname">{selectedbook.bookName}</p>
                    <p id="author">{selectedbook.author}</p>
                    <p id='price3'>Rs.{selectedbook.price}< span id='rate2'>Rs.{selectedbook.discountPrice}</span></p>
                    <AddToBag/>
                    {/* <div className="avatar"><Avatar>-</Avatar><input id="input2"></input><Avatar>+</Avatar> <button id="remove">Remove</button></div> */}
                    </div>
                </div>
               
                </div>
                {!address?<div onClick={handleplaceOrder}><button id="placebutton">PLACE ORDER</button></div>:""}
            </div>
            {address?(<CustomerDetails handleordersummary={handleordersummary}  />):(
            <div className="address"> 
                <p id="address">Address Details</p>
               
            </div>
            )}
            {closeorder?(<OrderSummary/>):(
            <div className="order">
                <p id="order">Order Summary</p>
            </div>
             )}
        </div>
    )
}