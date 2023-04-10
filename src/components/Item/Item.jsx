import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./Item.css"
import { Link } from 'react-router-dom';

const Item = ({id, name, img, price, stock}) => {

    return (

        <Card border="secondary"  style={{ width: '15rem' }} className='contenedorCard'>
            
            <Card.Img variant="top" src={img} alt={name} />
            
            <Card.Body>
                
                <Card.Title> {name} </Card.Title>
            
                <Card.Text>
                    Precio: ${price} <br></br>
                    Stock disponible: {stock}
                </Card.Text>
                
                <Link to={`/item/${id}`}>Ver detalle</Link>
                
            </Card.Body>
        </Card>


    )

}

export default Item