import itemInformation from "../../data/intemInformation"
import AddToCart from "./AddToCart/AddToCart"
import Carrousel from "./Carrousel/Carrousel"
import ItemDescription from "./ItemDescription/ItemDescription"
import Price from "./Price/Price"
import styles from "./Store.module.css"

const Store = () => {
  const itemList=itemInformation
  return (
    <div className={styles.landingItem}>
      <Carrousel imagesGalery={itemList[0].images}/>
      <div>
        <ItemDescription key={itemList[0].id}
          title={itemList[0].title}
          description={itemList[0].description}
          manufacturer={itemList[0].manufacturer} />
        <Price price={itemList[0].price} percentage="50" />
        <AddToCart></AddToCart>
      </div>
    </div>

  )
}

export default Store
