import { createContext, useState } from "react"

export const NavbarContext=createContext();
export const NavbarProvider=({children})=>{
    const[count, setCount]=useState(1);

    const handleIncrement=()=>{
        setCount(count+1);
    }
    const handleDecrement=()=>{
        count===0?setCount(count):setCount(count-1);
    }
  return (
    <NavbarContext.Provider value={{handleIncrement, handleDecrement, count }}>
      {children}
    </NavbarContext.Provider>
  );
}