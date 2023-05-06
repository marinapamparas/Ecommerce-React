import { useState, useEffect } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import "./ItemDetailContainer.css"
import { useParams } from "react-router-dom"
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import Loading from "../Loading/Loading"


const ItemDetailContainer = ({greeting}) =>{

    const [product, setProduct] = useState ()
    const [isLoading, setIsLoading] = useState(true)
    const {itemId} = useParams ()


    useEffect(() =>{
            const db = getFirestore()
            const queryDoc = doc (db, 'productos', itemId)

            
            getDoc(queryDoc)
            .then(resp => setProduct ({id:resp.id, ...resp.data()}))
            .catch (err => console.log(err))
            .finally (()=> setIsLoading (false))
        }, [])
    
    
    return (        
        <>
            
            { isLoading ? <Loading /> : <ItemDetail product = {product}/>}   
                
        </>   
    )
}

export default ItemDetailContainer