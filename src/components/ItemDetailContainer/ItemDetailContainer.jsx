import { useState, useEffect } from "react"
import { getProductById } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import "./ItemDetailContainer.css"
import { useParams } from "react-router-dom"


const ItemDetailContainer = ({greeting}) =>{

    const [product, setProducts] = useState ()
    const {itemId} = useParams ()

    useEffect (() => {
        
        getProductById(itemId)
            .then(response =>{
                
                setProducts(response)
                
            })
            .catch(error => {
                console.error(error)
            })

    },[])      
    
    
    return (        
        <>
            
            <div>
                <ItemDetail {...product}/>
            </div>     
        </>   
    )
}

export default ItemDetailContainer