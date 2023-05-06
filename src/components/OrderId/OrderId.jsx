
const OrderId = ({id, order}) => {

    return (
        <center>
        <p>Felicitaciones! su compra esta siendo procesada </p>
        <p>N° de orden generada: {id} </p>
        <p>Valor de tu compra: {order.total}</p>
        </center>
    )
}

export default OrderId

