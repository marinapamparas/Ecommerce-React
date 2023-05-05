import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList"
import "./ItemListContainer.css"
import Loading from "../Loading/Loading"
import { useParams } from "react-router-dom"
import { collection, getDocs, getFirestore, query, where, limit, orderBy} from 'firebase/firestore'


const ItemListContainer = ({greeting}) =>{
    const [products, setProducts] = useState ()
    const {prodCategory} = useParams()
    const [isLoading, setIsLoading] = useState(true)
    
      
    useEffect(()=>{
        if (prodCategory) {
            const db = getFirestore()
            const queryCollection = collection(db, 'productos') 
    
            const queryFilter = query(queryCollection, where('category', '==', prodCategory)) 
            
            getDocs(queryFilter)
                .then(resp => setProducts( resp.docs.map(producto => ({ id: producto.id, ...producto.data() }) ) ))
                .catch(err => console.log(err))
                .finally(()=> setIsLoading(false))        
        } else {
            const db = getFirestore()
            const queryCollection = collection(db, 'productos')     
            
            getDocs(queryCollection)
                .then(resp => setProducts( resp.docs.map(producto => ({ id: producto.id, ...producto.data() }) ) ))
                .catch(err => console.log(err))
                .finally(()=> setIsLoading(false))       
        }          
        }, [prodCategory])

    
    
    return (        
        <>
            <h1 className="h1">{greeting}</h1>
            
            <div className="contenedoritemlist">
                { isLoading ? <Loading /> : <ItemList products = {products}/>}
            </div>     
        </>   
    )
}

export default ItemListContainer