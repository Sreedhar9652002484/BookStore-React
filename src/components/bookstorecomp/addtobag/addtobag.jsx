
import { createContext, useContext, useState } from 'react'
import style from '../addtobag/addtobag.css'
import { AddQuantity } from '../../../services/bookservice';
import Navbar from '../../navbar/navbar';


export const Mycontext=createContext();

export const AddToBag=()=>{
    const[count, setCount]=useState(1);

    const handleIncrement=()=>{
        setCount(count+1);
    }
    const handleDecrement=()=>{
        count===0?setCount(count):setCount(count-1);
    }
    const handleCount=async()=>{
        let response=await AddQuantity(count);
        console.log(response);
    }
    return(
        <div className='addtobag' >
            <p id="plus" onClick={handleDecrement}>-</p>
            <p id="one">{count}</p>
            <p id='plus' onClick={handleIncrement}>+</p>
            <Mycontext.Provider value={count} >
                <Navbar/>
            </Mycontext.Provider>

        </div>
    )
}

