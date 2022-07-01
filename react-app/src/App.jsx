import NavBar from "./components/NavBar/Navbar"
import Store from "./components/Store/Store"
import Cart from "./components/Cart/CartMenu"
import './App.css'
import { CartProvider } from "./services/cartContex"
import { useState } from "react"

function App() {
  const [activeCart, setActiveCart]=useState(false)
  return (
    <CartProvider className="App">
      <NavBar activeCart={{setActiveCart}}/>
      <Store showCart={[activeCart, setActiveCart]}/>
    </CartProvider>
  )
}

export default App
