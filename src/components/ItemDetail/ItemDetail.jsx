import ItemCount from '../ItemCount/ItemCount';
import "./ItemDetail.css";
import { useState} from 'react';
import { Link } from 'react-router-dom';
import {useCartContext} from '../../context/CartContext';


const ItemDetail = ({product}) => {
        
    const [quantityAdded, setQuantityAdded] = useState(false)
    const {addItem} = useCartContext ()
    
    const onAdd = (cantidad) => { 
        
		addItem( { ...product, quantity: cantidad } )
		setQuantityAdded(true)
        
	} 
    

    return (

        <div className='contenedorDetalle'>

            <img src={product.img} alt={product.name} className='imgDetalle'/>
            
            <article>
                <section className='contTituloPrecio'>
                    <h2 className='tituloDetalle'>{product.name}</h2>
                    <p className='precioDetalle'>${product.price}</p>
                </section>
                <section className='contStockDescrip'>
                    <p className='stockDetalle'>Stock disponible: {product.stock}</p>
                    <p className='descripDetalle'>{product.description}</p>
                </section>
                <section>
                    {
                        quantityAdded ? (
                            <>
                            <Link to= '/cart'>Terminar compra</Link>
                            <Link to='/'>Seguir Comprando</Link>
                            </>
                        ) : (
                            <ItemCount initial= {1} stock={product.stock} onAdd={onAdd} />
                        )
                    }

                </section>
            </article>
        </div>
    )

}

export default ItemDetail

