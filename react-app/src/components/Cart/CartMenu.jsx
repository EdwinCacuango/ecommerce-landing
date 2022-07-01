import { useContext } from "react";
import { cartContext } from "../../services/cartContex";
import deleteLogo from "./icon-delete.svg"
import styles from "./CartMenu.module.css"


const Cart = () => {
  const { cart, setCart } = useContext(cartContext)
  let content = (<p>Your cart is empty</p>)
  const deleteHandler=(id)=>{
    const itemForDelete=cart.filter(element=>element.product.id!==id)
    setCart(itemForDelete)
  }
  if (cart.length > 0) {
    content = cart.map((item, index) => {
      //Siempre que aplique descuento
      //Fórmula: price-(discount)
      const actualPrice = item.product.price - (item.product.price * (item.product.discount / 100))
      const totalPrice = (item.numberAdded * actualPrice).toFixed(2)

      //Contenido
      return (
        <div key={index} className={styles.container}>
          <div className={styles.information}>
            <div className={styles.imgContainer}>
              <img src={item.product.images[0].medium} />
            </div>
            <div className={styles.description}>
              <p>{item.product.title}</p>
              <p>${actualPrice.toFixed(2)} x {item.numberAdded} <strong>${totalPrice}</strong></p>
            </div>
            <div>
              <button onClick={()=>{deleteHandler(item.product.id)}}><img src={deleteLogo} /></button>
            </div>
          </div>
          <button className={styles.checkout}>Checkout</button>
        </div>
      )
    }
    )

  }
  return (
    <div className={styles.cart}>
      <h3>Cart</h3>
      {content}
    </div>
  )

}


export default Cart;
