import React from 'react';
import './navbar.css';
import {  Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../../images/negro-100x100.png'

const Navigation = () =>{
    return(
        <div className="navbar">

            <Navbar collapseOnSelect fixed='top' expand='sm' bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="/">
                        <img alt="" src={logo} width="30" height="30" style={{marginRight:"10px",}} className="d-inline-block align-top"/>
                        Caro Sanchez</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-nabvar-nav" />
                        <Navbar.Collapse id='responsive-nabvar-nav'>
                            <Nav className="me-auto">
                                <Nav.Link href="/">Home</Nav.Link>
                                {/* <Nav.Link href="#features">Resumen</Nav.Link> */}
                                <Nav.Link href="/contact">Contacto</Nav.Link>
                                <Nav.Link href="/resumen">Resumen</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default Navigation;