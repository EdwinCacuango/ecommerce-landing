import {useContext, useState} from "react"
import MinusIcon from "./Icons/icon-minus.svg"
import PlusIcon from "./Icons/icon-plus.svg"
import CartIcon from "./Icons/icon-cart.svg"
import styles from "./AddToCart.module.css"
import { cartContext } from "../../../services/cartContex"

const AddToCart =({item})=>{
  const {cart,setCart}=useContext(cartContext)
  const [counter,setCounter]=useState(0)

  const minusHandler=()=>{
    if (counter===0) return
    setCounter(prev=>prev-1)
  }

  const plusHandler=()=>{
    setCounter(prev=>prev+1)
  }

  const addCart=()=>{
    if (counter===0) return

    //------Verificar para duplicados------//
    //Esta función filter devuelve un array con el elemento duplicado en el cart
    const duplicado=cart.filter(element=>element.product.id===item.id)

    //Cambiar solo el número de productos y no crear un doble registro
    if (duplicado.length>0){
      // 1.Eliminar el objeto duplicado del cart
      const withOutEl=cart.filter(element=>element.product.id!==item.id)
      setCart(withOutEl)
      // 2. Cambiar el objeto con su nuevo número de producto
      duplicado[0].numberAdded+=counter
      const update=duplicado[0]
      // 3. Enviar el objeto al carrito
      setCart((prev)=>[...prev, update])
      // 4. Reiniciar la cuenta
      setCounter(0)
      return
    } 
    //Comportamiento por defecto
    const newItem={product:item, numberAdded:counter}
    setCart((prev)=>[...prev, newItem])
    setCounter(0)
  }

    return (
        <div className={styles.container}>
            <div className={styles.counter}>
                <button onClick={minusHandler} className={styles.btn}><img src={MinusIcon} alt="Minus icon"/></button>
                <p>{counter}</p>
                <button onClick={plusHandler} className={styles.btn}><img src={PlusIcon} alt="Plus icon"/></button>
            </div>
            <button onClick={addCart}className={styles.addCart}><img src={CartIcon}/>Add to cart</button>
        </div>
    )
}

export default AddToCart
