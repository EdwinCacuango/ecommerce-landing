import { useEffect, useState } from "react"

const Carrousel=({imagesGalery})=>{
  const [idSelected, setIdSelected]=useState(1)
  const [pathForLarge, setPathForLarge]=useState(imagesGalery[0].large)

  const idHandler=(e)=>{
    setIdSelected(e.target.id)
  }
    return (<>
    <div>
        <div className="main-image">
          <img src={pathForLarge}/>
        </div>
        <div className="carrousel">
          {
            imagesGalery.map((item)=>{
              return (<div key={item.id}><button onClick={idHandler}><img src={item.medium} id={item.id}/></button></div>)
            })
          }
        </div>
      </div>
    </>)
}

export default Carrousel

