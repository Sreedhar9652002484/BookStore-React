import { createContext, useState } from "react"
import { AddQuantity } from "../../../services/bookservice";

export const NavbarContext=createContext();
export const NavbarProvider=({children})=>{
    const[count, setCount]=useState(1);

    const handleIncrement=()=>{
        setCount(count+1);
        handleCartQuantity();

    }
    const handleDecrement=()=>{
        count===0?setCount(count):setCount(count-1);
    }

    const [id, setId]=useState(0)
    const getProductId=(data)=>{
      setId(data)
    }

    const handleCartQuantity=async()=>{
        // const product_id = getselectedbook._id
        let response=await AddQuantity(id, count);
        console.log('quantity',response);
    }

  return (
    <NavbarContext.Provider value={{handleIncrement, handleDecrement, count,getProductId }}>
      {children}
    </NavbarContext.Provider>
  );
}