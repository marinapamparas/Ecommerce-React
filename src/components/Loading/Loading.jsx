import React from 'react'
import "./Loading.css"

const Loading = () => {
  return (
    <div className='cargandoContainer'>
        <div className='loader'></div>;
        <h2 className='cargando'>CARGANDO PRODUCTOS...</h2>
    </div>
  )
}

export default Loading
