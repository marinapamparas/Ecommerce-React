import { useState, useEffect } from "react"
import { getProducts, getProductsByCategory } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import "./ItemListContainer.css"
import { useParams } from "react-router-dom"

const ItemListContainer = ({greeting}) =>{
    const [products, setProducts] = useState ()
    const {prodCategory} = useParams()
    

    useEffect (() => {
       
        const asyncFunc = prodCategory ? getProductsByCategory : getProducts

        asyncFunc(prodCategory)
            .then(response =>{
                
                setProducts(response)
                
            })
            .catch(error => {
                console.error(error)
            })

    }, [prodCategory])  

       
    
    
    return (        
        <>
            <h1 className="h1">{greeting}</h1>
            
            <div className="contenedoritemlist">
                <ItemList products={products}/>
            </div>     
        </>   
    )
}

export default ItemListContainer