import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cart from '../Cart/Cart'
import CartContextProvider from '../context/CartContext'
import ItemList from '../ItemContainer/ItemList'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'
import NavBar from '../NavBar/NavBar'

function RoutesApp() {
  return (
     <BrowserRouter>
     <CartContextProvider>
        <NavBar/>
        <Routes>
            <Route path='/' element={
            <ItemList/>}/>

            <Route path='/categoria/:categoriaId' element={
            <ItemList/>}/>

            <Route path='/detalle/:detalleId' element={
                <ItemDetailContainer/>}/>

            <Route path='/cart' element={
                <Cart/>}/>
            
        </Routes>
        </CartContextProvider>
    </BrowserRouter>
   
  )
}

export default RoutesApp




     {/* <><NavBar /><ItemList /></> */}