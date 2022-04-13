import React from "react";
import {Col, Container, Row} from 'react-bootstrap'
import './HeroSection.css'

function HeroSection(){
    return(
        <>
            <Container fluid className='container-hero-section'>
                <Row  className="justify-content-md-center">
                    <Col className='align-self-center'>
                        <Container className='hero-text-items'>
                            <h1 className='hero-title'>Check out your IELTS guide!</h1>
                            <h6 className='hero-text'>Are you preparing for IELTS? <bold>Then this site is for you.</bold></h6>
                        </Container>
                    </Col>
                    <Col>
                        <img src="images/hero-img.png" alt="online test image" className='float-md-end hero-img'/>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default HeroSection