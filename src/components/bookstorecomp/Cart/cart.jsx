import { LocalActivityOutlined, LocationOnOutlined } from "@mui/icons-material"
import { Avatar, IconButton } from "@mui/material"
import image from '../../../assests/bhagavadbook.jpeg'
import stylecss from './cart.css'
import { Link } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import { CustomerDetails } from "../CustomerDetails/customerdetails"
import { OrderSummary } from "../OrderSummanry/ordersummary"
import { AddToBag } from "../addtobag/addtobag"
import { BookContext } from "../context/bookcontext"
import { CartContext } from "../context/cartcontext"
import { AddQuantity, GetAllCartItem, RemoveItem } from "../../../services/bookservice"
import axios from "axios"

export const Cart = () => {
    const { cartIsOpen, closeCart} = useContext(CartContext)
    const [cartData, setCartData] = useState([]);
    const [address, setAddress] = useState(false)
    const handleplaceOrder = () => {
        setAddress(true);
    }
    const [closeorder, setClose] = useState(false)
    const handleordersummary = (data) => {
        setClose(data)
    }
    useEffect(() => {
        if (cartIsOpen) {
            const fetchData = async () => {
                let response = await GetAllCartItem();
                const newBookDataArray = response.data.result.map((item) => item.product_id);
                setCartData(newBookDataArray);

                console.log(newBookDataArray);
            };
            fetchData();
        }
    }, [cartIsOpen]);

   const removeCartItem=async(item_id)=>{
    let response=await RemoveItem(item_id)
    console.log("reeeeee",response)
   }
    return (
        <div className="cart">
            <div className="link1">
                <Link onClick={closeCart} >Home</Link>
                <Link> / My Cart</Link>
            </div>

            <div className="mycart">
                <div className="location"><p id="mycarttext">My cart (1) </p>
                    <div className="locdiv"><IconButton><LocationOnOutlined /></IconButton><span>Use your current Location</span></div>
                </div>

                {cartData.map((item) => (
                    <div className="buttonimg" >
                        <div className="geetacart">
                            <img src={image} id="imgcart" alt="image"></img>
                            <div className="paradiv">
                                <p id="bookname">{item.bookName}</p>
                                <p id="author">{item.author}</p>
                                <p id='price3'>Rs.{item.discountPrice}< span id='rate2'>Rs.{item.price}</span></p>
                               <div style={{display:'flex'}} ><AddToBag /> <button id="remove"onClick={()=>removeCartItem(item._id)} >Remove</button></div>
                                {/* <div className="avatar"><Avatar>-</Avatar><input id="input2"></input><Avatar>+</Avatar> <button id="remove">Remove</button></div> */}
                            </div>
                        </div>
                    </div>
                ))}

                {!address ? <div onClick={handleplaceOrder}><button id="placebutton">PLACE ORDER</button></div> : ""}
            </div>
            {address ? (<CustomerDetails handleordersummary={handleordersummary} />) : (
                <div className="address">
                    <p id="address">Address Details</p>

                </div>
            )}
            {closeorder ? (<OrderSummary />) : (
                <div className="order">
                    <p id="order">Order Summary</p>
                </div>
            )}
        </div>
    )
}