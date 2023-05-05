
import Card from 'react-bootstrap/Card';
import "./Item.css"
import { Link } from 'react-router-dom';
import { memo } from 'react';

const Item = memo(({id, name, img, price, stock}) => {
    
        return (
    
            <Card border="secondary"  style={{ width: '15rem' }} className='contenedorCard'>
                
                <Card.Img variant="top" src={img} alt={name} />
                
                <Card.Body>
                    
                    <Card.Title> {name} </Card.Title>
                
                    <Card.Text>
                        Precio: ${price} <br></br>
                        Disponibles: {stock}
                    </Card.Text>
                    
                    <Link to={`/item/${id}`} className='square border border-danger border-2 rounded + linkDetalle'>Ver detalle</Link>
                    
                </Card.Body>
            </Card>
    
    )})

export default Item