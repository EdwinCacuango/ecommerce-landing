import { useEffect, useState } from "react"
import styles from "./Carrousel.module.css"

const Carrousel=({imagesGalery})=>{
  const [idSelected, setIdSelected]=useState(1)
  const [pathForLarge, setPathForLarge]=useState(imagesGalery[0].large)

  useEffect(()=>{
    const result=imagesGalery.filter(item=>item.id===idSelected)
    setPathForLarge(result[0].large)
  }, [idSelected])

  const idHandler=(e)=>{
    setIdSelected(+e.target.id)
  }
    return (
      <div>
        <div className={styles.mainImage}>
          <img src={pathForLarge}/>
        </div>
        <div className={styles.lowerCarrousel}>
          {
            imagesGalery.map((item)=>{
              return (<button onClick={idHandler} key={item.id} className={styles.itemCarrousel}><img src={item.medium} id={item.id}/></button>)
            })
          }
        </div>
      </div>)

}

export default Carrousel
