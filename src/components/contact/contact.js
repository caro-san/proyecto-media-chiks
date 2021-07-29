import React from 'react';
import './contact.css';
import {Container, Row, Col, Form, Button, Carousel } from 'react-bootstrap/';
import office1 from '../../images/carousel/home-office.jpg';
import office2 from '../../images/carousel/Home-Office-Portada.jpg';
import office3 from '../../images/carousel/iStock-897667680.jpg';
import Custombutton from '../utilidades/custombutton';

const Contact = () =>{

    return(
        <div className="contact">
            <h2 className="tituloContact">Contacto!</h2>

            <Container>
                <Row className="justify-content-md-center" style={{ padding:"40px", boxShadow:"7px -6px 24px -3px rgba(255,255,255,0.63)", borderRadius:"5px"  }}>
                    <Col xs={6} md={6} lg={6}>
                        <Form>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridName">
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control type="text" placeholder="Nombre" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridMail">
                                <Form.Label>Correo</Form.Label>
                                <Form.Control type="email" placeholder="Correo" />
                            </Form.Group>
                        </Row>
                        <Form.Group className="mb-3" controlId="formBasicSubject">
                            <Form.Label style={{color:"red",}}>Asunto</Form.Label>
                            <Form.Control type="text" placeholder="" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Mensaje</Form.Label>
                            <Form.Control as="textarea" rows={10} />
                        </Form.Group>
                        
                        <div className="d-grid gap-2">
                            <Button variant="outline-info" type="submit">
                                Enviar mensaje
                            </Button>
                        </div>
                        </Form>
                    </Col>

                    <Col xs={6} md={6} lg={6}>
                        <Carousel variant="dark" style={{marginBottom:"10px"}} controls={false}>
                            <Carousel.Item>
                                <img className="d-block w-100 carousel-contact" src={office1} alt="First slide"
                                />
                                {/* <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption> */}
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="d-block w-100" src={office2} alt="Second slide" />

                                {/* <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption> */}
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="d-block w-100" src={office3} alt="Third slide" />

                                {/* <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                </Carousel.Caption> */}
                            </Carousel.Item>
                        </Carousel>
                    
                        <Row xs={1} md={2} style={{marginBottom:"10px"}}>
                            <Col style={{width:"20%"}}><Custombutton texto="Facebook" color="#fff" btnText="ubicacion" tamaño="80"/></Col>
                            <Col><h3>Ubicacion</h3><span className="text-muted">GBA Zona norte</span></Col>
                        </Row>
                        <Row xs={1} md={2} style={{marginBottom:"10px"}}>
                            <Col style={{ width:"20%"}}><Custombutton texto="Facebook" color="#fff" btnText="celular" tamaño="80"/></Col>
                            <Col><h3>Telefono</h3><span className="text-muted">+54 9 11 1234 5678</span></Col>
                        </Row>
                        <Row xs={1} md={2}>
                            <Col style={{ width:"20%"}}><Custombutton texto="Facebook" color="#fff" btnText="mail" tamaño="80"/></Col>
                            <Col><h3>Mail</h3><span className="text-muted">ejemplo@mimail.com</span></Col>
                        </Row>
                        
                        
                        
                    
                    
                    
                    </Col>

                </Row>
            </Container>
            
        </div>
    );
}

export default Contact;