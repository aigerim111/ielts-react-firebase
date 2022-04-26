import React from "react";
import {Col, Container, Row} from 'react-bootstrap'

function HeroSection(){
    return(
        <>
            <Container fluid className='container-section'>
                <Container>
                    <Row  className="justify-content-md-center">
                        <Col className='align-self-center'>
                            <Container className='flex-container section-text-block'>
                                <h1 className='section-title'>Check out your IELTS guide!</h1>
                                <h6 className='section-text'>Are you preparing for IELTS? <bold>Then this site is for you.</bold></h6>
                            </Container>
                        </Col>
                        <Col>
                            <img src="images/hero-img.png" alt="online test image" className='float-md-end section-img'/>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    )
}

export default HeroSection