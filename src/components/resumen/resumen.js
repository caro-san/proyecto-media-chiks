import React, { useEffect, useState } from 'react';
import './resumen.css';
import {Card, ListGroupItem, ListGroup, Container, Row,Col, Spinner, Button, Modal, Form} from 'react-bootstrap/'
import axios from 'axios';
import { FaRedo } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import Swal from 'sweetalert2';


const Resumen = () =>{

    // const [resumen, setResumen] = useState(null);
    const [item, setItem] = useState({
        title:'',
        year:'',
        school:'',
        description:'',
    });
    const [items, setItems] = useState([
        {
            _id:'',
            title:'',
            year:'',
            school:'',
            description:'',
        }
    ]);

    //traigo los elementos que esten en la ruta /items
    useEffect(()=> {
        fetch('/items')
        .then(res => {
            if(res.ok){
                return res.json();
            }
        })
        .then(jsonRes => setItems(jsonRes))
        .catch(err => console.log(err));
    }, [items])

    //traigo los valores contenidos en los inputs donde este eL onChange={handleChange} y se guardan en el segundo parametro del estado setItem
    function handleChange(e) {
        const {name, value} = e.target;
        setItem(prevInput => {
            return{
                    ...prevInput,
                    [name]: value,
                };
        });
        // console.log(item)
    }


    function addItem(e){
        e.preventDefault();
        //Se construye el nuevo modelo del nuevo item
        const newItem = {
            title: item.title,
            year: item.year,
            school: item.school,
            description: item.description
        };
        //se envia con axios y el metodo post
        axios.post('/newitem', newItem);
        console.log(newItem)
        Swal.fire({
            icon: 'success',
            title: 'Excelente...',
            text: 'Curso agregado!',
        })
        //se limpia el setItem
        setItem({
            title:'',
            year:'',
            school:'',
            description:'',
        })
    }

    function deleteItem(id){
        
        Swal.fire({
            title: 'Estas seguro?',
            text: "No podrás recuperarlo!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, borralo!'
        }).then((result) => {
                if (result.isConfirmed) {
                    axios.delete('/delete/' + id);
                    Swal.fire(
                        'Eliminado!',
                        'El curso a sido eliminado.',
                        'success'
                    )
                }
            })
        console.log(`Delete item with id ${id}`)
    }

    
    
    //MODAL PARA CREAR UN NUEVO ITEM
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //MODAL PARA ACTUALIZAR UN ITEM
    const [isPut, setIsPut] = useState(false);
    const handleCloseUp = () => setIsPut(false);
    const handleShowUp = () => setIsPut(true);
    const [updatedItem, setUpdatedItem] = useState({
        id:'',
        title:'',
        year:'',
        school:'',
        description:'',
    });

    function openUpdate(id, title, year, school, description){
        setIsPut(true);
        setUpdatedItem(prevInput => {
            return(
                {
                    ...prevInput,
                    id: id,
                    title: title,
                    year: year,
                    school: school,
                    description: description,
                }
            )
        })
    }

    function updateItem(id){
        axios.put('/put/' + id, updatedItem);

        Swal.fire({
            icon: 'success',
            title: 'Excelente...',
            text: 'Curso editado!',
        })
        console.log(`item with id ${id} updated`)
    }

    function handleUpdate(e){
        const {name, value} = e.target;
        setUpdatedItem(prevInput => {
            return(
                {
                    ...prevInput,
                    [name]: value
                }
            )
        })
        // console.log(updatedItem);
    }


    //funcion para llamar dos funciones en el onclick
    function callTwoFunctions(id, title, year, school, description){
        handleShowUp();
        openUpdate(id, title, year, school, description)
    }

    return(
        
        <div className="resumen">
            <h2>Ejemplo de CRUD MERN</h2>
            <Container style={{marginTop:"10px"}}>
            <Button style={{float:'right',
                            marginBottom:"10px" 
                            }} variant="primary" onClick={handleShow}>
                Nuevo curso
            </Button>
                {items ?
                <Row>
                    {items.map((item)=>
                        <Card style={{ 
                            width: '18rem', 
                            marginRight:"10px", 
                            marginBottom:"10px",
                            marginTop:"10px"
                            }} key={item._id}>
                                <Container className="button-content">
                                <Row>
                                    <Col xs="auto">
                                        <Button onClick={() => deleteItem(item._id)} className="resu-button" variant="outline-danger"><FaTrash/></Button>
                                    </Col>
                                    <Col xs="auto">
                                        <Button onClick={() => callTwoFunctions(item._id, item.title, item.year, item.school, item.description)} className="resu-button" variant="outline-info"><FaRedo/></Button>
                                    </Col>
                                </Row>
                            </Container>

                            <ListGroup className="list-group-flush">
                                <ListGroupItem>
                                    <span style={{fontWeight:"bold"}}>Curso:</span> {item.title}
                                </ListGroupItem>
                                <ListGroupItem>
                                <span style={{fontWeight:"bold"}}>Año:</span> {item.year}
                                </ListGroupItem>
                                <ListGroupItem>
                                <span style={{fontWeight:"bold"}}>Lugar:</span> {item.school}
                                </ListGroupItem>
                                <ListGroupItem>
                                <span style={{fontWeight:"bold"}}>Descripción:</span> {item.description}
                                </ListGroupItem>
                            </ListGroup>
                        </Card>
                    )}
                </Row>
                : <Spinner animation="border" size="lg" variant="danger"/>}

            {/* MODAL PARA CREAR */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>Agregue un curso</Modal.Title>
                </Modal.Header>
                <Container>
                    <Form >
                        <Form.Group className="mb-3" controlId="formBasicTitle">
                            <Form.Label>Titulo</Form.Label>
                            <Form.Control onChange={handleChange} type="text" placeholder="Ingrese titulo" name="title" value={item.title} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicTitle">
                            <Form.Label>Año</Form.Label>
                            <Form.Control onChange={handleChange} name="year" type="text" placeholder="Ingrese año" value={item.year} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicTitle">
                            <Form.Label>Institucion o lugar</Form.Label>
                            <Form.Control onChange={handleChange} name="school" type="text" placeholder="Ingrese lugar de realización" value={item.school}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicTitle">
                            <Form.Label>Descripción</Form.Label>
                            <Form.Control onChange={handleChange} name="description" value={item.description} type="text" placeholder="Ingrese descripción" />
                        </Form.Group>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button onClick={addItem} variant="primary" type="submit">
                                Enviar
                            </Button>
                        </Modal.Footer>
                    </Form>
                </Container>
            </Modal>
            {/* FIN MODAL PARA CREAR */}
            
            {/* MODAL PARA UPDATE */}
            <Modal show={isPut} onHide={handleCloseUp}>
                <Modal.Header>
                    <Modal.Title>Modifique un curso</Modal.Title>
                </Modal.Header>
                <Container>
                    <Form >
                        <Form.Group className="mb-3" controlId="formBasicTitle">
                            <Form.Label>Titulo</Form.Label>
                            <Form.Control onChange={handleUpdate} type="text" placeholder="Ingrese titulo" name="title" value={updatedItem.title} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicTitle">
                            <Form.Label>Año</Form.Label>
                            <Form.Control onChange={handleUpdate} name="year" type="text" placeholder="Ingrese año" value={updatedItem.year} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicTitle">
                            <Form.Label>Institucion o lugar</Form.Label>
                            <Form.Control onChange={handleUpdate} name="school" type="text" placeholder="Ingrese lugar de realización" value={updatedItem.school}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicTitle">
                            <Form.Label>Descripción</Form.Label>
                            <Form.Control onChange={handleUpdate} name="description" value={updatedItem.description} type="text" placeholder="Ingrese descripción" />
                        </Form.Group>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleCloseUp}>
                                Close
                            </Button>
                            <Button onClick={() => updateItem(updatedItem.id)} variant="primary" type="button">
                                Enviar
                            </Button>
                        </Modal.Footer>
                    </Form>
                </Container>
            </Modal>
            {/* FIN MODAL PARA UPDATE */}


            </Container>
        </div>

        
    );
}

export default Resumen;


