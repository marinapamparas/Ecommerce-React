import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemCount from './components/ItemCount/ItemCount'
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
    
    <>
    <NavBar/>

    <Routes>
      <Route path='/' element={<ItemListContainer greeting='Productos de Artistica al mejor costo'/>} />
      <Route path='/count' element={<ItemCount initial= {1} stock={10} onAdd={(quantity) =>console.log('Cantidad agregada', quantity)} />} />
    
      <Route path='*' element={<Navigate/>} to='/'/>
    </Routes>

    </>
    </BrowserRouter>
  )
}

export default App
