import React, { useEffect, useState } from 'react'
import Item from './Item'
import { collection, getDoc, getDocs, getFirestore, query, where } from 'firebase/firestore'
import { useParams } from 'react-router-dom'


function ItemList() {
    const [productos,SetProductos] = useState([])
    const [mostrar,SetMostrar] = useState(false)
    const { categoriaId } = useParams()
    
    const [valor,SetValor] = useState()

    

    
    useEffect(()=>{
        SetValor(categoriaId)
        if (categoriaId==null) {
            todaColeccion()
        }else{
            filtrado()
        }
        function todaColeccion(){
            const querydb = getFirestore()
            const queryCollection = collection(querydb, 'productos')
            getDocs(queryCollection)
            .then(resp => {SetProductos(resp.docs.map(item => ({ id:item.id, ...item.data()})))
            SetMostrar(true)})
        }
        function filtrado(){
            const querydb = getFirestore()
            const queryCollection = collection(querydb, 'productos')
            const queryFilter = query(queryCollection, where('estilo','==',categoriaId))
            getDocs(queryFilter)
            .then(resp => {SetProductos(resp.docs.map(item => ({ id:item.id, ...item.data()})))
            SetMostrar(true)})
        }
        
    },[categoriaId])


  return (
    <div style={{"display":"flex","flexWrap":"wrap","justifyContent":"center"}}>
        {mostrar ?(

                <>
                {
                productos.map((product) => {
                    return (
                    <div key={product.id} style={{"margin":"2%","margin":"auto","marginTop":"2%"}}>
                        <Item
                            marca ={product.marca}
                            img = {product.imagen}
                            precio = {product.precio}
                            id={product.id}
                            todoProducto={product}
                        />
                    </div>
                    );
                })
                }
                </>


        ):(<><img src='imagenes/cargando.gif'/></>)}
    </div>
  )
}

export default ItemList