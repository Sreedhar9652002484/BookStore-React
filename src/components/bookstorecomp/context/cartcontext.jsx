import { createContext, useEffect, useState } from "react"
import { GetAllCartItem } from "../../../services/bookservice";

export const CartContext=createContext();
export const CartProvider=({children})=>{
const [cartIsOpen, setCartIsOpen] = useState(false);

  const openCart = async() => {
    setCartIsOpen(true);
  };
  const closeCart = () => {
    setCartIsOpen(false);
  };
  return (
    <CartContext.Provider value={{ cartIsOpen,openCart, closeCart}}>
      {children}
    </CartContext.Provider>
  );
}