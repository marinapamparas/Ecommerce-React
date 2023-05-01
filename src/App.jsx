import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { ContextApp } from './context/CartContext'



function App() {
  return (
    <div>
      <BrowserRouter>
        <ContextApp.Provider value={undefined}>
        
          <NavBar/>

          <Routes>
            
            <Route path='/' element={<ItemListContainer greeting='Productos de Artistica al mejor costo'/>} />
            <Route path='/category/:prodCategory' element={<ItemListContainer greeting='Para asesoramiento personalizado, contactanos!'/>} />
            <Route path='/item/:itemId' element={<ItemDetailContainer/>} />
            <Route path='*' element= {<Navigate to='/'/>} />
          
          </Routes>

        </ContextApp.Provider>

      </BrowserRouter>
    </div>
  )
}


export default App
