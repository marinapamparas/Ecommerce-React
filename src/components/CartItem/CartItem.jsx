import "./CartItem.css"
import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";


const CartItem = ({product}) => {

    const {cart, clearCart, totalPrice, removeItem} = useCartContext ()
  
    return (

       

        // <section>
            
        //     <img src={img} alt={name} />
            
        //     <div>
                
        //         <h3> {name} </h3>
            
        //         <p>
        //             Precio: ${price} <br></br>
        //             Disponibles: {stock}
        //         </p>
                
        //         <Link to={`/item/${id}`} className='square border border-danger border-2 rounded + linkDetalle'>Ver detalle</Link>
                
        //     </div>
        // </section>

        <div>
            <Link to={`/item/${product.id}`}><img src={product.img} alt={product.name} className="imgCart"/></Link>
            
            <div >
                <h4 >{product.name}</h4><span><em>Precio:</em>{product.price}</span><span><em>Cantidad:</em> {product.quantity}</span>
            </div>
            <button onClick={()=> removeItem(product.id)}>x</button>
        </div>


    )

}

export default CartItem