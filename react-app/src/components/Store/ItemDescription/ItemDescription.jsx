import styles from "./ItemDescription.module.css"
const ItemDescription=({id,title, manufacturer, description })=>{
    return (
    <div className={styles.descriptionContainer}>
        <p className={styles.manufacturer}>{manufacturer}</p>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{description}</p>
    </div>

    )
}

export default ItemDescription
