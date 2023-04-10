import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'



function App() {
  return (
    <div>
      <BrowserRouter>
        
        <NavBar/>

        <Routes>
          
          <Route path='/' element={<ItemListContainer greeting='Productos de Artistica al mejor costo'/>} />
          <Route path='/category/:prodCategory' element={<ItemListContainer/>} />
          <Route path='/item/:itemId' element={<ItemDetailContainer/>} />
          <Route path='*' element= {<Navigate to='/'/>} />
        
        </Routes>

      </BrowserRouter>
    </div>
  )
}


export default App
