import React from "react";
import {Col, Container, Row, Table} from "react-bootstrap";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Listening(){
    return(
        <Container fluid className='container-info-section'>
            <Container className='info-section'>
                <h2 className='section-title'>IELTS Listening</h2>
                <p className='section-info-text'>
                    On this page you can find all the essential information about IELTS Listening test,
                    learn how IELTS Listening test is scored and see useful practice tests,
                    tips and strategies to improve your listening skills.
                </p>
                    <Row center md={3} xs={1}>
                        <Col>
                            <Link to="/listening-practice">
                                <FontAwesomeIcon icon="fa-solid fa-headphones-simple"  size='4x' className='style-icon' border/>
                                <p>Listening samples</p>
                            </Link>
                        </Col>
                        <Col>
                            <Link to="/listening-exercises">
                                <FontAwesomeIcon icon="fa-solid fa-pencil" size='4x' className='style-icon' border />
                                <p>Listening exercises</p>
                            </Link>
                        </Col>
                        <Col>
                            <Link to="/listening-tips">
                                <FontAwesomeIcon icon="fa-solid fa-comment-dots" size='4x' className='style-icon' border />
                                <p>Tips and tricks</p>
                            </Link>
                        </Col>
                    </Row>
            </Container>
            <Container className='info-section'>
                <h2 className='section-title'>Information about IELTS Listening test</h2>
                <p className='section-info-text'>
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
                    The Listening module takes 40 minutes: 30 min for testing and 10 min for transferring your answers to the answer sheet.
                    There are 40 questions in Listening module, with 10 questions in each section. Sections get increasingly difficult.
                </p>
            </Container>
        </Container>
    )
}

export default Listening