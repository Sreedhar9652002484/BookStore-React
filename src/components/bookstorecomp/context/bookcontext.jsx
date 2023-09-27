import { createContext, useEffect, useState } from "react";

export const BookContext = createContext();

export const BookContextProvider=({children})=>{
    // const [cartData, setCartData]=useState(null);

    // const handleCartData=(obj)=>{
    //     setCartData(obj)

    //     console.log('cardata', cartData)

    // }


    return (
        <BookContext.Provider value={{}}>
          {children}
        </BookContext.Provider>
      );
}