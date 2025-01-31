import React, { useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import { addDoc, collection, getDoc, getDocs, getFirestore, query, where } from 'firebase/firestore'

function Cart() {
  const {cartList,total,eliminar} = useContext(CartContext)
  const {detalleId} = useParams()
  const [vacio,SetVacio] = useState(false)
  const [lista,SetLista] = useState()
  const [mostrarListadoListo,setListado]= useState(false)


  function generarOrden(e){
    SetVacio(false)
    eliminar()
    e.preventDefault();

    let orden={}

    orden.comprador = {nombre:"tomas",email:"tom@gmail.com",telefono:"0000121212"}
    orden.total = total;

    orden.items = cartList.map(cartItem =>{
      const id = cartItem.id
      const nombre = cartItem.marca
      console.log(orden.comprador.nombre)
      SetLista(orden)
      setListado(true)
      console.log(orden)
      return {id,nombre}
    })

    const db = getFirestore()
    const queryCollection = collection(db, 'pedidos')
    addDoc(queryCollection, orden)
   
  }

  useEffect(()=>{
    if (cartList.length === 0) {
      SetVacio(false)
    }else{
      SetVacio(true)
    }
  },[cartList])
  
  function borrar(){
    eliminar()
  }

  return (
    <div style={{"textAlign":"center","marginTop":"3%"}}>
      <div>
        {
          vacio ? 
          (<div>
            <div>
              {
                cartList.map(prod => <div key={prod.id}><h2>{prod.marca}: cantidad: {prod.valor}, total:{prod.cantidad}</h2></div>)
              }
            </div>
            <div>
              <h3>Total a pagar: ${total}</h3>
              <div style={{"textAlign":'center','display':'flex','justifyContent':'center'}}>
                <div style={{'marginRight':'1%'}}>
                    <button onClick={borrar} className='btn btn-outline-secondary'>Vaciar carrito</button>
                </div>
                <div style={{'marginLeft':'1%'}}>
                    <button onClick={generarOrden} className='btn btn-outline-secondary'>Confirmar compra</button>
                </div>
              </div>
              
            </div>
          </div>
          )
          :
          (
            <div>No hay objetos en el carro</div>
          )
        }
      </div>


      <div>
        {
          mostrarListadoListo ?
          (
            <div>
                  <div>
                  <h5>Nombre: {lista.comprador.nombre}</h5>
                  <h6>Email: {lista.comprador.email}</h6>
                  <h6>Telefono: {lista.comprador.telefono}</h6>
                </div>
                <div>
                  <Link to={'/'}>
                    <button className="btn btn-primary">Volver al menu</button>
                  </Link>
                </div>
            </div>
          
          )
          :
          (<></>)

        }
      </div>
    </div>
  )
}

export default Cart