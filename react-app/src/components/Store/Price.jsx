const Price = ({ price, percentage }) => {
    //Obtener el precio final
    const percentageDiscount = percentage / 100
    const discount = price * percentageDiscount
    const finalPrice = price - discount

    return (
        <>
            <p>${finalPrice}</p>
            <p>{percentage}%</p>
            <p>${price}</p>
        </>
    )
}


export default Price