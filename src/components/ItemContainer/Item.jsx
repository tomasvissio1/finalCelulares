import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import '../ItemContainer/Item.css' 

function Item({marca,img,precio,id}) {
  return (
    
    <div>
      <Card style={{ width: '18rem'}}>
        <Card.Img variant="top" src={img} style={{"width":"40%","margin":"auto","marginTop":"3%"}}/>
        <Card.Body>
          <Card.Title style={{"textAlign":"center"}}>{marca}</Card.Title>
          <Card.Text style={{"textAlign":"center"}}>${precio} </Card.Text>
          <NavLink to={`/detalle/${id}`} style={{"textDecoration":"none!important"}}>
            <Button className="btn btn-primary" id='btnDetalles' variant="primary">Ver Más</Button>
          </NavLink> 
        </Card.Body>
      </Card>
    </div>
  )
}



{/* <div className="card" style={{"width": "18rem"}}>
        <img src={img} style={{"width":"40%","margin":"auto","marginTop":"3%"}}className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title" style={{"textAlign":"center"}}>{marca}</h5>
            <h6 className="card-text" style={{"textAlign":"center"}}>${precio}</h6>
            <NavLink to={`/detalle/${id}`} style={{"textDecoration":"none!important"}}>
                <button href="#" className="btn btn-primary" id='btnDetalles' >Detalles</button>
            </NavLink> 
        </div>
    </div> */}

export default Item