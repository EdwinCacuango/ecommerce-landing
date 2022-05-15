import NavBar from "./components/NavBar/Navbar"
import Store from "./components/Store/Store"
import Cart from "./components/Cart/CartMenu"
import './App.css'
import { CartProvider } from "./services/cartContex"

function App() {

  return (
    <CartProvider className="App">
      <NavBar />
      <Cart />
      <Store />
    </CartProvider>
  )
}

export default App
