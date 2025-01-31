import React, { useState } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import '../NavBar/NavBar.css'

function NavBar() {
  return (
  <Navbar bg="dark" variant="dark" id='bar'>
        <Container>
        <Link to={`/`} style={{textDecoration: 'none'}}>
            <Navbar.Brand href="#home">Tu Celular!</Navbar.Brand>
        </Link>
        <Nav className="me-auto">
          <Link to={'/categoria/iphone'} style={{textDecoration: 'none'}}>
              <Nav.Link href="#home">iPhones</Nav.Link>
          </Link>
          <Link to={'/categoria/samsung'} style={{textDecoration: 'none'}}>
              <Nav.Link href="#features">Samsungs</Nav.Link>
          </Link>
        </Nav>
        </Container>
        <div style={{"marginRight":"2%"}}>
            <Link to={'/cart'}><button style={{"borderRadius":"24px"}}><img style={{"borderRadius":"24px"}} src="imagenes/carrito.png"/></button></Link>
        </div>
  </Navbar>
  )
}

export default NavBar

{/* <Link to={`/`}>
                <a className="nav-link active" aria-current="page" href="#">Todas las marcas</a>
              </Link> */}



              
              
              
{/* <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
        <Link to={`/`}>
            <a className="navbar-brand" href="#">Tu Celular!</a>
        </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              
              
                <Link to={'/categoria/iphone'}><a className="nav-link" href="#">iPhone</a></Link>
                <Link to={'/categoria/samsung'}><a className="nav-link" href="#">Samsung</a></Link>
            </div>
            </div>
        </div>
        <div style={{"marginRight":"2%"}}>
        <Link to={'/cart'}><button>carrito</button></Link>
            
        </div>
        </nav>
    </div> */}