import AddToCart from "./AddToCart/AddToCart"
import Carrousel from "./Carrousel/Carrousel"
import ItemDescription from "./ItemDescription"
import Price from "./Price"
const Store = () => {

  //Para las imágenes del producto, insertar un array de objetos, cada objeto con las rutas de la ilustración
  const itemInformation = [{
    id: 1,
    title: "Fall Limited Edition Sneakers",
    description: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
    manufacturer: "Sneaker Company",
    price: 250,
    images: [
      {
        id:1,
        medium:"./Image-products/image-product-1-thumbnail.jpg",
        large: "./Image-products/image-product-1.jpg",
      },
      {
        id:2,
        medium:"./Image-products/image-product-2-thumbnail.jpg",
        large: "./Image-products/image-product-2.jpg",
      },
      {
        id:3,
        medium:"./Image-products/image-product-3-thumbnail.jpg",
        large: "./Image-products/image-product-3.jpg",
      },
      {
        id:4,
        medium:"./Image-products/image-product-4-thumbnail.jpg",
        large: "./Image-products/image-product-4.jpg",
      }
    ]
  }]


  return (
    <>
      <Carrousel imagesGalery={itemInformation[0].images}/>
      <>
        <ItemDescription key={itemInformation[0].id}
          title={itemInformation[0].title}
          description={itemInformation[0].description}
          manufacturer={itemInformation[0].manufacturer} />
        <Price price={itemInformation[0].price} percentage="50" />
        <AddToCart></AddToCart>
      </>
    </>

  )
}

export default Store
