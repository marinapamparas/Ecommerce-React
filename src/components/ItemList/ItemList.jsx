import Item from '../Item/Item'
import "./ItemList.css"
import { memo } from 'react';



const ItemList = memo (({products}) => {
    
    if (products !== undefined) {
        return (
            <div className='contenedorCards'>
                {products.map(prod => <Item key={prod.id} {...prod}/>)}
            </div>
        )
    }   
}) 

export default ItemList