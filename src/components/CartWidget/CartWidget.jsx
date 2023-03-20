import cart from './assets/carrito.png'
import './CartWidget.css'


const CartWidget = () =>{
    return(
        <div className='contenedor'>
            <img src={cart} alt='carrito' className='imgcart'/>
            <p className='cartcounter'>0</p>
        </div>
    )
}

export default CartWidget