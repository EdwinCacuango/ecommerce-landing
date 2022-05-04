import ImgM1 from "./image-products/image-product-1-thumbnail.jpg"
import ImgL1 from "./image-products/image-product-1.jpg"
import ImgM2 from "./image-products/image-product-2-thumbnail.jpg"
import ImgL2 from "./image-products/image-product-2.jpg"
import ImgM3 from "./image-products/image-product-3-thumbnail.jpg"
import ImgL3 from "./image-products/image-product-3.jpg"
import ImgM4 from "./image-products/image-product-4-thumbnail.jpg"
import ImgL4 from "./image-products/image-product-4.jpg"


//Para las imágenes del producto, insertar un array de objetos, cada objeto con las rutas de la ilustración
const itemInformation = ()=>{
  return ([{
  id: 1,
  title: "Fall Limited Edition Sneakers",
  description: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
  manufacturer: "Sneaker Company",
  price: 250,
  images: [
    {
      id:1,
      medium:ImgM1,
      large: ImgL1 ,
    },
    {
      id:2,
      medium:ImgM2,
      large: ImgL2,
    },
    {
      id:3,
      medium:ImgM3,
      large: ImgL3,
    },
    {
      id:4,
      medium:ImgM4,
      large: ImgL4,
    }
  ]
}]
)
}

export default itemInformation
