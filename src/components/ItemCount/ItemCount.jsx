import Button from 'react-bootstrap/Button'
import './ItemCount.css'
import { useState } from 'react'


const ItemCount = ({stock, initial, onAdd}) =>{
    
    const [quantity, setQuantity] = useState (initial)

    const increment = () =>{
        if (quantity < stock) {
            setQuantity(quantity+1)
        }
    }

    const decrement = () =>{
        if (quantity > 1) {
            setQuantity(quantity-1)
        }
    }

    return (
        <div className='contador'>
            <div className='contenedorButton'>
                <Button onClick={decrement} className="colorBoton" variant="outline-light">-</Button>
                <h3 className='cantidad'>{quantity}</h3>
                <Button onClick={increment} className="colorBoton" variant="outline-light">+</Button>
            </div>
            <div>
                <Button className='botonAgregar' onClick={() => onAdd (quantity)} disabled ={!stock}>
                    Agregar al Carrito
                </Button>
            </div>
        </div>
    )

}

export default ItemCount