import React from 'react';
import './intro.css';
// import { Container, Row, Col } from 'react-bootstrap';

const Intro = ({titulo, nombre}) =>{
    return(
        <div>
            <h1>{titulo}</h1>

            <p>Desarrolladora web fullstack javascript.</p>
            <p></p>
            
        </div>
    )
}

export default Intro