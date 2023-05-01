import { useState, useEffect } from "react"
import { getProducts, getProductsByCategory } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import "./ItemListContainer.css"
import Loading from "../Loading/Loading"
import { useParams } from "react-router-dom"
import { collection, getDocs, getFirestore, query, where, limit, orderBy} from 'firebase/firestore'


const ItemListContainer = ({greeting}) =>{
    const [products, setProducts] = useState ()
    const {prodCategory} = useParams()
    const [isLoading, setIsLoading] = useState(true)
    

    // useEffect (() => {
       
    //     const asyncFunc = prodCategory ? getProductsByCategory : getProducts

    //     asyncFunc(prodCategory)
    //         .then(response =>{
                
    //             setProducts(response)
                
    //         })
    //         .catch(error => {
    //             console.error(error)
    //         })

    // }, [prodCategory])
    
    // para usar en IDC
    // useEffect(() =>{
    //     const db = getFirestore()
    //     const queryDoc = doc (db, 'productos', pid)

    //     getDoc(queryDoc)
    //     .then(resp => setProducto ({id:resp.id, ...resp.data()}))
    // }, [])
        
    
    // useEffect(() =>{
    //         const db = getFirestore()
    //         const queryCollection = collection (db, 'productos')
    
    //         getDocs(queryCollection)
    //         .then(resp => setProducts(resp.docs.map(producto => ({id:producto.id, ...producto.data()}))))
    //         .catch(error => {console.error(error)})
           
    //     }, [])
       
    useEffect(()=>{
        if (prodCategory) {
            const db = getFirestore()
            const queryCollection = collection(db, 'productos') 
    
            const queryFilter = query(
                queryCollection, 
                where('category', '==', prodCategory) 
            ) 
            
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