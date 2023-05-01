import { useState, useEffect } from "react"
import { getProductById } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import "./ItemDetailContainer.css"
import { useParams } from "react-router-dom"
import { doc, getDoc, getFirestore } from 'firebase/firestore'


const ItemDetailContainer = ({greeting}) =>{

    const [product, setProducts] = useState ()
    const {itemId} = useParams ()

    // useEffect (() => {
        
    //     getProductById(itemId)
    //         .then(response =>{
                
    //             setProducts(response)
                
    //         })
    //         .catch(error => {
    //             console.error(error)
    //         })

    // },[])      

    useEffect(() =>{
            const db = getFirestore()
            const queryDoc = doc (db, 'productos', itemId)
    
            getDoc(queryDoc)
            .then(resp => setProducts ({id:resp.id, ...resp.data()}))
        }, [])
    
    
    return (        
        <>
            
            <div>
                <ItemDetail {...product}/>
            </div>     
        </>   
    )
}

export default ItemDetailContainer