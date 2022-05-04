import styles from "./Price.module.css"

const Price = ({ price, percentage }) => {
    //Obtener el precio final
    const percentageDiscount = percentage / 100
    const discount = price * percentageDiscount
    const finalPrice = (price - discount).toFixed(2)

    return (
        <div>
          <div className={styles.actualPrice}>
            <p className={styles.finalPrice}>${finalPrice}</p>
            <p className={styles.percentage}>{percentage}%</p>
          </div>
          <p className={styles.price}>${price.toFixed(2)}</p>
        </div>
    )
}


export default Price
