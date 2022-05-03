import React, {useEffect, useState} from "react";
import {Link, Route, useParams} from "react-router-dom";
import {Button, Col, Container, Row} from "react-bootstrap";
import TestAnswer from "./TestAnswer";
import testData from "../pages/dataTest"

function TestForm(){

    const params = useParams()
    const sectionName = params.section
    const id = params.testid

    const[checkAnswers, setCheckAnswers] = useState(false)
    const[result, setResult] = useState(0)
    const[showResult, setShowResult] = useState(false)
    const[test, setTest] = useState(testData[id])

    const [userData, setUserData] = useState({})

    // const[text, setText] = useState(test.text)
    // const[questions, setQuestions] = useState(test.questionList)

    // const answers = [
    //     {id: 1, testQuestion: "What is the answer for this question? Guess!", options: ["True", "False", "Not given"], answerType: 'select', rightAnswer: "True"},
    //     {id: 2, testQuestion: "Or find the right answer here? Guess!", answerType: "text", rightAnswer: "is not"}]

    // async function getData(){
    //     await fetch("localhost:8080/test/params.section/"+params.testid)
    // }

    //after submitting answers, it calls checkAnswers to alert child components to call them check chosen options
    //and after sets result to zero to discard any conflict
    const handleCheck = () => {
        setCheckAnswers(prev => !prev)
        console.log("Result after checking" + result)
        setShowResult(true)
        setResult(0)
    }

    //function to show all questions
    const questionsToShow = test && test.map(el => {
        console.log(el);
        return (
            <>
                <h4>TEXT: </h4>
                <h6>{el.text}</h6>
                {el.questionList && el.questionList.map(q => {
                    return (
                        <>
                            <TestAnswer key = {q.id}
                                        question = {q}
                                        checkAnswers = {checkAnswers}
                                        setResult = {setResult}
                                        result = {result}
                            />
                        </>
                    )
                })}
            </>
        )
    })


    return (
        <>
            <Container fluid className='container-section skills'>
                <Row className="justify-content-md-center">
                    <Col className="align-self-start">
                        <Container className="container-section-small">
                            <Container className="flex-container section-text-block skills">
                                <h2 className='section-title'>{sectionName} test.{id}</h2>
                                <p className='section-text test'>
                                    {questionsToShow}
                                </p>

                                <Button variant="primary" onClick={handleCheck} className="test-btn">Submit</Button>
                                {showResult && <h6 className="result-text">Your result: {result}</h6>}
                            </Container>
                        </Container>
                    </Col>
                </Row>
        </Container>
        </>
    )}

export default TestForm;