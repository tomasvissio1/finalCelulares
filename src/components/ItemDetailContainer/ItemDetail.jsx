import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import '../ItemDetailContainer/ItemDetail.css'
import { Card, Button } from 'react-bootstrap'

function ItemDetail({precio,marca,img,caracteristicas,id}) {
  return (
    <div>
      <Card style={{ width: '30rem',marginTop:'3%' }}>
        <Card.Img variant="top" style={{"width":"40%","margin":"auto","marginTop":"3%"}} src={`/${img}`} />
        <Card.Body>
          <Card.Title>{marca}</Card.Title>
          <h3 className="card-text" style={{"textAlign":"center"}}>${precio}</h3>
          <Card.Text>{caracteristicas}</Card.Text>
              <ItemCount
                  precio = {precio}
                  marca = {marca}
                  id={id}
                />
        </Card.Body>
      </Card>
    </div>
  )

  {/* <div className="card" id='tarjta' style={{"width": "30rem","textAlign":"center!important"}}>
        <img src={`/${img}`} style={{"width":"40%","margin":"auto","marginTop":"3%"}}className="card-img-top" alt="..."/>
        <div className="card-body">
            <h2 className="card-title" style={{"textAlign":"center"}}>{marca}</h2>
            <h3 className="card-text" style={{"textAlign":"center"}}>${precio}</h3>
            <p className="card-text">{caracteristicas}</p>
            <ItemCount
              precio = {precio}
              marca = {marca}
              id={id}
            />
        </div>
    </div> */}
}

export default ItemDetail