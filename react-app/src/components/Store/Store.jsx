import { useContext } from "react"
import { cartContext } from "../../services/cartContex"
import AddToCart from "./AddToCart/AddToCart"
import Carrousel from "./Carrousel/Carrousel"
import ItemDescription from "./ItemDescription/ItemDescription"
import Price from "./Price/Price"
import styles from "./Store.module.css"

const Store = () => {
  const {products}=useContext(cartContext)
  return (
    <>
      {
        products.map((product, index)=>{
        return <div key={index} className={styles.landingItem}>
          <Carrousel imagesGalery={product.images} />
          <div>
            <ItemDescription
              title={product.title}
              description={product.description}
              manufacturer={product.manufacturer} />
            <Price price={product.price} percentage="50" />
            <AddToCart item={product}/>
          </div>
        </div>})
      }
    </>   
  )
}

export default Store
