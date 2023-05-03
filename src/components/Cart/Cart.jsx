import { CartContext } from "../../context/CartContext";
import { useContext, useState} from "react";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import { addDoc, collection, doc, getFirestore, updateDoc, writeBatch } from "firebase/firestore"


const Cart = () => {
    const {cart, clearCart, totalQuantity, total} = useContext (CartContext)

    if(totalQuantity === 0) {
        return (
            <div>
                <h1>No hay items en el carrito</h1>
                <Link to='/'>Productos</Link>
            </div>
        )
    }

    return (
        <div>
            { cart.map (p => <CartItem key={p.id} {...p}/>)}
            <h3>Total: {total()}</h3>
            <button onClick={() => clearCart()}>Limpiar carrito</button>
            <Link to='/checkout'>Checkout</Link>

        </div>
    )
}

export default Cart
