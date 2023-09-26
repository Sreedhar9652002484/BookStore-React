import { createContext, useState } from "react"

export const CartContext=createContext();
export const CartProvider=({children})=>{
const [cartIsOpen, setCartIsOpen] = useState(false);

  const openCart = () => {
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