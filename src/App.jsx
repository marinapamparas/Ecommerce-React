import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Cart from './components/Cart/Cart'
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { CartProvider} from './context/CartContext'
import { FormContainer } from './components/FormContainer/FormContainer'



function App() {
  return (
    <div>
      <BrowserRouter>
        <CartProvider>
          
          <NavBar/>

          <Routes>
            
            <Route path='/' element={<ItemListContainer greeting='PRODUCTOS DE ARTISTICA AL MEJOR COSTO'/>} />
            <Route path='/category/:prodCategory' element={<ItemListContainer greeting='Para asesoramiento personalizado, contactanos!'/>} />
            <Route path='/item/:itemId' element={<ItemDetailContainer/>} />
            <Route path='/cart' element={<Cart/>}/>
            <Route path= '/checkout' element={<FormContainer/>}/>
            <Route path='*' element= {<Navigate to='/'/>} />

          </Routes>
          

        </CartProvider>
        

      </BrowserRouter>
    </div>
  )
}


export default App
