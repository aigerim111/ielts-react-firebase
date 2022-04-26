import React, {useState} from "react";
import {Button, Col, Container, Row, Table} from "react-bootstrap";
import { Link, useParams } from "react-router-dom";


function Section(props){

    const [sectionName, setSectionName] = useState(props.sectionName)
    const [imgLink, setImgLink] = useState(props.imgLink)

    return(
        <>
            <Container fluid className='container-section skills'>
                <Container className="container-section-small">
                    <Row className="justify-content-md-center">
                        <Col className="align-self-center">
                            <Container className="flex-container section-text-block skills">
                                <h2 className='section-title'>IELTS {sectionName}</h2>
                                <p className='section-text'>
                                    Let's prepare right now!
                                </p>
                                <Link to = {`/references/${sectionName}`}><Button variant="primary" className="section-btn">Tests</Button></Link>
                            </Container>
                        </Col>
                        <Col>
                            <img src={imgLink} alt="listening image" className='float-md-end section-img'/>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Container fluid className="container-section">
                <Container className="container-section-small">
                <p className='flex-container section-text-block info'>
                    <h2 className='section-subtitle'>Information about IELTS Listening test</h2>
                    <Table striped hover>
                        <tbody>
                        <tr>
                            <td>Time</td>
                            <td>40 minutes</td>
                        </tr>
                        <tr>
                            <td>Questions</td>
                            <td>40</td>
                        </tr>
                        <tr>
                            <td>Sections</td>
                            <td>4</td>
                        </tr>
                        </tbody>
                    </Table>

                    <br />
                    <span className="section-text">
                        The Listening module takes 40 minutes: 30 min for testing and 10 min for transferring your answers to the answer sheet.
                        There are 40 questions in Listening module, with 10 questions in each section. Sections get increasingly difficult.
                    </span>
                </p>
                </Container>
            </Container>
            </>
    )
}

export default Section