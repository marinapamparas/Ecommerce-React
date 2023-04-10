import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ItemCount from '../ItemCount/ItemCount';
import "./ItemDetail.css"

const ItemDetail = ({id, name, price, img, category, stock, description}) => {

    return (

        <Card border="secondary"  style={{ width: '15rem' }} className='contenedorCard'>
            
            <Card.Img variant="top" src={img} alt={name} />
            
            <Card.Body>
                
                <Card.Title> {name} </Card.Title>
            
                <Card.Text>
                    Categoria: {category} <br></br>
                    Precio: ${price} <br></br>
                    Stock disponible: {stock}<br></br>
                    Descripción: {description}<br></br>
                </Card.Text>
                
                <ItemCount initial= {1} stock={10} onAdd={(quantity) =>console.log('Cantidad agregada', quantity)} />
                
            </Card.Body>
        </Card>


    )

}

export default ItemDetail