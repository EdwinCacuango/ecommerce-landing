import NavBar from "./components/NavBar/Navbar"
import Store from "./components/Store/Store"
import './App.css'
import { CartProvider } from "./services/cartContex"

function App() {

  return (
    <CartProvider className="App">
      <NavBar />
      <Store />
    </CartProvider>
  )
}

export default App
