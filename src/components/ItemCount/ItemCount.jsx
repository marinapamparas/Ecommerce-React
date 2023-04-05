import './ItemCount.css'
import { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'


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
        <div>
            <div className='contenedorButton'>
                <button onClick={decrement} variant="outline-secondary"></button>
                <h3>{quantity}</h3>
                <button onClick={increment} variant="outline-secondary"></button>
            </div>
            <div>
                <button onClick={() => onAdd (quantity)} disabled ={!stock}>
                    Agregar al Carrito
                </button>
            </div>
        </div>
    )

}

export default ItemCount