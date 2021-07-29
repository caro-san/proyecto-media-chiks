import React from 'react';
// import Custombutton from '../utilidades/custombutton';
import './footer.css';
// import {Container, Row, Col } from 'react-bootstrap/';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

const Footer = () =>{
    return(
        <div className="footer">
            <p>Creado por: Caro ♥</p>
            {/* <a
                className="App-link"
                href="https://www.linkedin.com/in/carolina-sanchez-m/"
                target="_blank"
                rel="noopener noreferrer"
            >LinkedIn
            </a> */}
            {/* <Custombutton texto="Facebook" color="blue"/>
            <Custombutton texto="Twitter" color="red"/>
            <Container>
                <Row>
                    <Col>1 of 2</Col>
                    <Col>2 of 2</Col>
                </Row>
            </Container> */}

        <FacebookIcon style={{fontSize: 60, color: "#3b5998" }} />
        <LinkedInIcon style={{fontSize: 60, color: "#0e76a8" }} />
        <TwitterIcon style={{fontSize: 60, color: "#00acee" }} />
        <WhatsAppIcon style={{fontSize: 60, color: "#00bb2d" }} />
            
        </div>
    );
}

export default Footer;