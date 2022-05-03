const ItemDescription=({id,title, manufacturer, description })=>{
    return (
    <div>
        <p>{manufacturer}</p>
        <h1>{title}</h1>
        <p>{description}</p>
    </div>
        
    )
}

export default ItemDescription