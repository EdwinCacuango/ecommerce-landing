import {itemInformation} from "../data/itemInformation"
import AddToCart from "./AddToCart/AddToCart"
import Carrousel from "./Carrousel/Carrousel"
import ItemDescription from "./ItemDescription/ItemDescription"
import Price from "./Price/Price"
import styles from "./Store.module.css"

const Store = () => {
  return (
    <div className={styles.landingItem}>
      <Carrousel imagesGalery={itemInformation[0].images}/>
      <div>
        <ItemDescription key={itemInformation[0].id}
          title={itemInformation[0].title}
          description={itemInformation[0].description}
          manufacturer={itemInformation[0].manufacturer} />
        <Price price={itemInformation[0].price} percentage="50" />
        <AddToCart></AddToCart>
      </div>
    </div>

  )
}

export default Store
