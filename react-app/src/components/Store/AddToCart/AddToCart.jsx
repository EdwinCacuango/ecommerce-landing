import {useState} from "react"
import MinusIcon from "./Icons/icon-minus.svg"
import PlusIcon from "./Icons/icon-plus.svg"
import CartIcon from "./Icons/icon-cart.svg"

import styles from "./AddToCart.module.css"
const AddToCart =()=>{

  const [counter,setCounter]=useState(0)

  const minusHandler=()=>{
    if (counter===0) return
    setCounter(prev=>prev-1)
  }

  const plusHandler=()=>{
    setCounter(prev=>prev+1)
  }
    return (
        <div className={styles.container}>
            <div className={styles.counter}>
                <button onClick={minusHandler} className={styles.btn}><img src={MinusIcon} alt="Minus icon"/></button>
                <p>{counter}</p>
                <button onClick={plusHandler} className={styles.btn}><img src={PlusIcon} alt="Plus icon"/></button>
            </div>
            <button className={styles.addCart}><img src={CartIcon}/>Add to cart</button>
        </div>
    )
}

export default AddToCart
