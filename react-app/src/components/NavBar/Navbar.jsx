import { useContext, useState } from "react"
import { cartContext } from "../../services/cartContex"
import CartMenu from "../Cart/CartMenu"
import logo from "./icons/logo.svg"
import cartLogo from "./icons/icon-cart.svg"
import imageProfile from "./icons/image-avatar.png"
import styles from "./Navbar.module.css"

const NavBar = () => {
  const { cart } = useContext(cartContext)
  const [activeCart, setActiveCart] = useState(false)
  const cartBtnHandler = () => {
    setActiveCart(prev => !prev)
  }

  let totalProducts = 0
  //Array with only number of products in cart
  const numberProducts = cart.map(item => {
    return item.numberAdded
  })
  totalProducts=numberProducts[0]
  

  return (<header className={styles.header}>
    <nav className={styles.nav}>
      <ul>
        <li><a href="/"><img src={logo} alt="Sneakers logo" /></a></li>
        <li>
          <ul className={styles.ancorList}>
            <li className={styles.itemNav}><a>Collections</a></li>
            <li className={styles.itemNav}><a>Men</a></li>
            <li className={styles.itemNav}><a>Women</a></li>
            <li className={styles.itemNav}><a>About</a></li>
            <li className={styles.itemNav}><a>Contact</a></li>
          </ul>
        </li>
      </ul>
    </nav>
    <div className={styles.cart}>
      <button onClick={cartBtnHandler} className={styles.cartIcon}>
        <img src={cartLogo} />
        <span>{totalProducts}</span>
      </button>
      <button className={styles.imgProfile}>
        <img src={imageProfile} alt="Image profile" />
      </button>
      
    </div>
    {
        activeCart && <CartMenu></CartMenu>
    }

  </header>)
}

export default NavBar
