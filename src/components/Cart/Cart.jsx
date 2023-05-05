import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";



const Cart = () => {
        const {cart, clearCart, totalPrice, removeItem} = useCartContext ()
    
    return (
        cart.length === 0 ?
            <center>
                <h1>No hay productos en el carrito</h1>
                <Link to='/'><button>Productos</button></Link>
            </center>
        :
            <div>
                
                { cart.map (p => <CartItem key={p.id} product={p}/>) }
                
                <h3>Total: {totalPrice()}</h3>
                <button onClick={clearCart}>Vaciar Carrito</button>
                
                <Link to='/checkout'>Checkout</Link>

            </div>
    )
 
}

export default Cart


// { cart.map (p => <CartItem key={p.id} {...p}/>) }
//                 {/* <button onClick={removeItem}>x</button> */}
//                 <h3>Total: {totalPrice()}</h3>
//                 <button onClick={clearCart}>Vaciar Carrito</button>
                
//                 <Link to='/checkout'>Checkout</Link>
