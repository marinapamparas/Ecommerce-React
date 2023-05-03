import ItemCount from '../ItemCount/ItemCount';
import "./ItemDetail.css";
import { useState, useContext} from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';


const ItemDetail = ({id, name, price, img, stock, description}) => {

    const [quantityAdded, setQuantityAdded] = useState(0)

    const {addItem} = useContext (CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded (quantity)

        const item =  {
            id, name, price
        }
        
        addItem (item, quantity)
    }

    return (

        <div className='contenedorDetalle'>

            <img src={img} alt={name} className='imgDetalle'/>
            
            <article>
                <section className='contTituloPrecio'>
                    <h2 className='tituloDetalle'>{name}</h2>
                    <p className='precioDetalle'>${price}</p>
                </section>
                <section className='contStockDescrip'>
                    <p className='stockDetalle'>Stock disponible: {stock}</p>
                    <p className='descripDetalle'>{description}</p>
                </section>
                <section>
                    {
                        quantityAdded > 0 ? (
                            <Link to= '/cart'>Terminar compra</Link>
                        ) : (
                            <ItemCount initial= {1} stock={stock} onAdd={handleOnAdd} />
                        )
                    }
                </section>
            </article>
        </div>
    )

}

export default ItemDetail


// const ItemDetail = ({id, name, price, img, category, stock, description}) => {

//     return (

//         <Card style={{ width: '15rem' }} className='contenedorCard'>
            
//             <Card.Img variant="top" src={img} alt={name} />
            
//             <Card.Body>
                
//                 <Card.Title className='TituloCard'> {name} </Card.Title>
            
                

//                 <ListGroup variant="flush">
//                     <ListGroup.Item>Categoria: {category}</ListGroup.Item>
//                     <ListGroup.Item>Precio: ${price}</ListGroup.Item>
//                     <ListGroup.Item>Stock disponible: {stock}</ListGroup.Item>
//                     <ListGroup.Item>Descripción: {description}</ListGroup.Item>
//                 </ListGroup>
                    
                
                
//                 <ItemCount initial= {1} stock={10} onAdd={(quantity) =>console.log('Cantidad agregada', quantity)} />
                
//             </Card.Body>
//         </Card>


//     )

// }