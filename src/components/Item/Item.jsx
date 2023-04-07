import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./Item.css"

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
                
                <Button variant="outline-dark">Ver detalle</Button>
                
            </Card.Body>
        </Card>


    )

}

export default Item