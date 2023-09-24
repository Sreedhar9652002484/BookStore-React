
import { useState } from 'react'
import style from '../addtobag/addtobag.css'
export const AddToBag=()=>{
    const[count, setCount]=useState(0);

    const handleIncrement=()=>{
        setCount(count+1);
    }
    const handleDecrement=()=>{
        count===0?setCount(count):setCount(count-1);
    }
    return(
        <div className='addtobag' >
            <p id="plus" onClick={handleDecrement}>-</p>
            <p id="one">{count}</p>
            <p id='plus' onClick={handleIncrement}>+</p>
        </div>
    )
}