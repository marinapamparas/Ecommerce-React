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
    
      
    useEffect(() => {
            const db = getFirestore();
            const queryCollection = collection(db, 'productos');
            let queryFilter = queryCollection;
          
            if (prodCategory) {
              queryFilter = query(queryCollection, where('category', '==', prodCategory));
            }
          
            setIsLoading(true);
          
            getDocs(queryFilter)
              .then((resp) => {
                const data = resp.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
                setProducts(data);
              })
              .catch((error) => {
                console.error(error);
              })
              .finally(() => {
                setIsLoading(false);
              });
    }, [prodCategory]);
         

    
    
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