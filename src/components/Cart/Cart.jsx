import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import "./Cart.css"
import Button from 'react-bootstrap/esm/Button';



const Cart = () => {
    
    const {cart, clearCart, totalPrice} = useCartContext ()
    
    return (
        <>
        {cart.length === 0 ?
            <div className="contCartVacio">
                <h1 className="tituloCartVacio">EL CARRITO DE COMPRAS ESTÁ VACÍO</h1>
                <Link to='/'><Button className="botonCartVacio">¿VAMOS A LLENARLO?</Button></Link>
            </div>
        :
            <div className="contenedorCart">
                <div className="contVaciarCart">
                    <Button onClick={clearCart} className="botonVaciarCart">Vaciar Carrito</Button>
                </div>
                <div className="contenedorCartBody">
                    { cart.map (p => <CartItem key={p.id} product={p}/>) }
                </div> 

                <div className="contFooterCart">
                    <h3 className="precioTotal">Total: ${totalPrice()}</h3>
                    <Link to='/checkout'><Button className="botonTerminarCompra">Terminar compra</Button></Link>
                </div>

            </div>
        }
        </>
        
    )
 
}

export default Cart

