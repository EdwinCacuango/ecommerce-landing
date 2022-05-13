import React, { useState } from "react"
import itemInformation from "../data/intemInformation"

const cartContext= React.createContext()
const CartProvider=({children})=>{
    const [products, setProducts]=useState(itemInformation)
    const [cart, setCart]=useState([])
    return(
        <cartContext.Provider value={{cart, setCart, products}}>
            {children}
        </cartContext.Provider>
    )
}

export {cartContext, CartProvider}