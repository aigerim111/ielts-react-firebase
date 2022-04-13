import React from "react";
import {Card, Col, ListGroup, Row, Container} from "react-bootstrap";
import './CardSection.css'

function CardSection(){
    return(
        <Container className='container-card-section'>
            <Row xs={1} md={2} className="g-4">
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title>IELTS Listening</Card.Title>
                            <ListGroup horizontal>
                                <ListGroup.Item action href='/listening'>About Listening section</ListGroup.Item>
                                <ListGroup.Item action href='/listening-practice'>Listening samples</ListGroup.Item>
                                <ListGroup.Item action href='/listening-exercises'>Listening exercises</ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title>IELTS Reading</Card.Title>
                            <ListGroup horizontal>
                                <ListGroup.Item action href='/reading'>About Reading section</ListGroup.Item>
                                <ListGroup.Item action href='/reading-practice'>Reading samples</ListGroup.Item>
                                <ListGroup.Item action href='/reading-exercises'>Reading exercises</ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title>IELTS Writing</Card.Title>
                            <ListGroup horizontal>
                                <ListGroup.Item action href='/writing'>About Writing Section</ListGroup.Item>
                                <ListGroup.Item action href="/writing-academic-task-1">Academic Writing task 1 samples</ListGroup.Item>
                                <ListGroup.Item action href="/writing-general-task-1">General Writing task 1 samples</ListGroup.Item>
                                <ListGroup.Item action href="/writing-essay">Writing task 2 samples</ListGroup.Item>
                                <ListGroup.Item action href="/writing-exercises">Writing exercises</ListGroup.Item>
                                <ListGroup.Item action href="/writing-vocabulary">Writing vocabulary</ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title>IELTS Speaking</Card.Title>
                            <ListGroup horizontal>
                                <ListGroup.Item action href='/speaking'>About Speaking Section</ListGroup.Item>
                                <ListGroup.Item action href="/speaking-practice">Speaking samples</ListGroup.Item>
                                <ListGroup.Item action href="/speaking-vocabulary">Speaking vocabulary</ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default CardSection;