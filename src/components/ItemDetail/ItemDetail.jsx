import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ItemCount from '../ItemCount/ItemCount';
import ListGroup from 'react-bootstrap/ListGroup';
import "./ItemDetail.css"

const ItemDetail = ({id, name, price, img, category, stock, description}) => {

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
                <ItemCount initial= {1} stock={10} onAdd={(quantity) =>console.log('Cantidad agregada', quantity)} />
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