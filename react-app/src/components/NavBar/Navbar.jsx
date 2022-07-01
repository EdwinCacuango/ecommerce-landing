import { useContext, useState } from "react"
import { cartContext } from "../../services/cartContex"
import CartMenu from "../Cart/CartMenu"
import logo from "./icons/logo.svg"
import cartLogo from "./icons/icon-cart.svg"
import imageProfile from "./icons/image-avatar.png"
import styles from "./Navbar.module.css"

const NavBar = ({activeCart}) => {
  const { cart } = useContext(cartContext)
  const {setActiveCart} = activeCart
  const cartBtnHandler = () => {
    setActiveCart(prev => !prev)
  }

  let totalProducts = 0
  //Counter number of products on cart
  if (cart.length > 0) {
    const numberProducts = cart.map(item => {
      return item.numberAdded
    })
    totalProducts = numberProducts[0]
  }

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
  </header>)
}

export default NavBar
