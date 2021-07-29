import React from 'react';
import logo from '../../images/caro.png';
import logoHtml from '../../images/html.png';
import logoCss from '../../images/css.png';
import logoJavascript from '../../images/javascript.png';
import logoBootstrap from '../../images/bootstrap.png';
import logoReact from '../../images/react.png';
import Intro from '../intro/Intro';
import './home.css';
import {Container, Row, Col } from 'react-bootstrap/';


const Home = () =>{
    return(
        <div className="home">
            <img src={logo} className="foto-logo" alt="logo" />
            <Intro titulo="Caro Sanchez" nombre="Carolina"/>

            <Container>
                <Row className="justify-content-center" xs="auto">
                    <Col><img alt="" src={logoHtml} width="50" height="50" className="d-inline-block align-top"/></Col>
                    <Col><img alt="" src={logoCss} width="50" height="50" className="d-inline-block align-top"/></Col>
                    <Col><img alt="" src={logoBootstrap} width="50" height="50" className="d-inline-block align-top"/></Col>
                    <Col><img alt="" src={logoJavascript} width="50" height="50" className="d-inline-block align-top"/></Col>
                    <Col><img alt="" src={logoReact} width="50" height="50" className="d-inline-block align-top"/></Col>
                </Row>
            </Container>
        </div>
    );
}

export default Home;