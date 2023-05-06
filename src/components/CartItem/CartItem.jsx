import "./CartItem.css"
import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/esm/Button';


const CartItem = ({product}) => {

    const {removeItem} = useCartContext ()
  
    return (

        <table>
            <tr className="tableRow">
                <td className="contImg"><Link to={`/item/${product.id}`}><img src={product.img} alt={product.name} className="imgCart"/></Link></td>
                
                <td className="contDatosItem">
                    <h3 className="tituloItem">{product.name}</h3>
                    <div className="datosItem">
                        <p className="textoDatosItem">Precio:  {product.price}</p>
                        <p className="textoDatosItem">Cantidad:  {product.quantity}</p>
                    </div>
                </td>
                <td className="contRemoveItem"><Button onClick={()=> removeItem(product.id)} className="botonRemoverItem">x</Button></td>
            </tr>
        </table>


    )

}

export default CartItem