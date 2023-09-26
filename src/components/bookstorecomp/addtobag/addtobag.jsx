
import { createContext, useContext, useState } from 'react'
import style from '../addtobag/addtobag.css'
import { AddQuantity } from '../../../services/bookservice';
import Navbar from '../../navbar/navbar';
import { NavbarContext } from '../context/navbarContext';


export const Mycontext=createContext();

export const AddToBag=()=>{
    const {handleDecrement, handleIncrement, count}=useContext(NavbarContext);
    const handleCount=async()=>{
        let response=await AddQuantity(count);
        console.log(response);
    }
    return(
        <div className='addtobag' >
            <p id="plus" onClick={handleDecrement}>-</p>
            <p id="one">{count}</p>
            <p id='plus' onClick={handleIncrement}>+</p>
        </div>
    )
}

