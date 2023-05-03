import "./CartItem.css"
import { Link } from 'react-router-dom';


const CartItem = ({id, name, img, price, stock}) => {

    return (

       

        <section>
            
            <img src={img} alt={name} />
            
            <div>
                
                <h3> {name} </h3>
            
                <p>
                    Precio: ${price} <br></br>
                    Disponibles: {stock}
                </p>
                
                <Link to={`/item/${id}`} className='square border border-danger border-2 rounded + linkDetalle'>Ver detalle</Link>
                
            </div>
        </section>


    )

}

export default CartItem