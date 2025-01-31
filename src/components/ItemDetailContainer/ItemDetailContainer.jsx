import { collection, doc, getDoc, getDocs, getFirestore } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Item from '../ItemContainer/Item'
import ItemDetail from './ItemDetail'

function ItemDetailContainer() {
    const {detalleId} = useParams()
    const [productos,SetProductos] = useState({})
    const [mostrar,SetMostrar] = useState(false)

    


    

    
    useEffect(()=>{
            /* fetch('/productos.json')
            .then(productos=>productos.json())
            .then(data=>{
                SetProductos(data.find(elemento=>(elemento.id===detalleId)))
                SetMostrar(true)
                
            })
            .catch(error=>console.log("no cargo"))
            .finally(console.log(productos)) */

            const querydb = getFirestore()
            const queryCollection = collection(querydb, 'productos')
    
            getDocs(queryCollection)
            .then(resp => {SetProductos(resp.docs.map(item => ({ id:item.id, ...item.data()})))
            SetMostrar(true)
            console.log(resp)
        })
    },[])


  return (
    <div style={{"display":"flex","flexWrap":"wrap"}} >
        {mostrar ?(

                <div style={{"display":"block","margin":"auto","textAlign":"center"}}>
                    <ItemDetail
                        precio={productos[detalleId].precio}
                        caracteristicas={productos[detalleId].caracteristicas}
                        img={productos[detalleId].imagen}
                        marca={productos[detalleId].marca}
                        id={detalleId}
                    />
                </div>

        ):(<><img src='/imagenes/cargando.gif'/></>)}
    </div>
  )
}

export default ItemDetailContainer

{/* <>
                {
                productos.map((product) => {
                    return (
                    <div key={product.id} style={{"margin":"2%","margin":"auto","marginTop":"2%"}}>
                        <ItemDetail
                             precio = {product.precio}
                        />
                    </div>
                    );
                })
                }
                </> */}