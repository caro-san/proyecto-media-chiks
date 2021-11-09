import React, { useEffect, useState } from 'react';
import './resumen.css';
import {Card, ListGroupItem, ListGroup, Container, Row, Spinner} from 'react-bootstrap/'


const Resumen = () =>{

    const [personajes, setPersonajes] = useState();
    // const [contador, setContador]= useState(0);

    

    useEffect(() =>
        fetch("https://hp-api.herokuapp.com/api/characters")
        .then(response =>
            response.json()
        )
        .then(personajes=>
            setPersonajes(personajes)
        )
    );


    return(
        
        <div className="resumen">
            <Container>
                {personajes ?
                <Row>
                    {personajes.map((personaje,index)=>
                        <Card style={{ width: '18rem', marginRight:"10px", marginBottom:"10px" }} key={index}>
                        <Card.Img variant="top" style={{ marginTop:"10px" }} src={personaje.image} />
                        <Card.Body>
                            <Card.Title style={{color:"black"}}>{personaje.name}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Actor: {personaje.actor}</Card.Subtitle>
                            <Card.Text style={{color:"black"}}>
                            {personaje.name} of kind {personaje.species}, was born {personaje.dateOfBirth}.
                            </Card.Text>
                        </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem>House: {personaje.house}</ListGroupItem>
                                <ListGroupItem>Ancestry: {personaje.ancestry}</ListGroupItem>
                                <ListGroupItem>Patronus: {personaje.patronus}</ListGroupItem>
                                <ListGroupItem>Core of wand: {personaje.wand.core}</ListGroupItem>
                            </ListGroup>
                        </Card>
                    )}
                </Row>
                : <Spinner animation="border" size="lg" variant="danger"/>}
            </Container>
        </div>

        
    );
}

export default Resumen;


