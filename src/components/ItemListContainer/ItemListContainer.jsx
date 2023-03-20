import "./ItemListContainer.css"

const ItemListContainer = ({greeting}) =>{
    return(
        <div className="contenedoritemlist">
        <h1 className="h1">{greeting}</h1>
        </div>
    )
}

export default ItemListContainer