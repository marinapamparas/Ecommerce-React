import cart from '../../assets/carrito.png'
import './CartWidget.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'


const CartWidget = () =>{
    const {totalQuantity} = useContext (CartContext)

    return(
        <Link to='/cart' className='contenedor' >
            <img src={cart} alt='carrito' className='imgcart'/>
            {totalQuantity ()}
        </Link>
    )
}

export default CartWidget


// style={{display: totalQuantity > 0 ?  'block' : 'none'}}