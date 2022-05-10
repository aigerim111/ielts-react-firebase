import React, {useEffect, useRef, useState} from "react";
import {Link, Route, useParams} from "react-router-dom";
import {Button, Col, Container, Row} from "react-bootstrap";
import TestAnswer from "./TestAnswer";
import reading from "../pages/readingData";
import listening from "../pages/listeningData"
import writing from "../pages/writingData";
import speaking from "../pages/speakingData";

function TestForm(){

    const params = useParams()
    const sectionName = params.section
    const testLink = params.testid

    const[checkAnswers, setCheckAnswers] = useState(false)
    const[result, setResult] = useState(0)
    const[showResult, setShowResult] = useState(false)
    const[test, setTest] = useState([])

    const [userData, setUserData] = useState({userAnswerList: [], userId: "", userResult: result, section: sectionName, link: testLink})

    // const[text, setText] = useState(test.text)
    // const[questions, setQuestions] = useState(test.questionList)

    // const answers = [
    //     {id: 1, testQuestion: "What is the answer for this question? Guess!", options: ["True", "False", "Not given"], answerType: 'select', rightAnswer: "True"},
    //     {id: 2, testQuestion: "Or find the right answer here? Guess!", answerType: "text", rightAnswer: "is not"}]

    // async function getData(){
    //     await fetch("localhost:8080/test/params.section/"+params.testid)
    // }

    const firstRun = useRef(true)
    useEffect(() => {
        if(firstRun.current){
            switch (sectionName){
                case "Reading":
                    setTest(Object.values(reading))
                    break
                case "Listening":
                    setTest(Object.values(listening))
                    break;
                case "Writing":
                    setTest(Object.values(writing))
                    break
                case "Speaking":
                    setTest(Object.values(speaking))
                    break;
            }
            firstRun.current = false
            return;
        }

        console.log(result)
        setUserData({...userData, userResult: result})
        console.log(userData)
    }, [result])

    //after submitting answers, it calls checkAnswers to alert child components to call them check chosen options
    //and after sets result to zero to discard any conflict
    const handleCheck = () => {
        setCheckAnswers(prev => !prev)
        setShowResult(true)
        console.log(userData)
    }

    const handleSubmit = () => {
        console.log(userData)
    }

    //function to show all questions
    const questionsToShow = test && test.map(el => {
        return (
            <>
                {sectionName === "Listening" && <h2>Task: <audio controls src={el.audio}>Audio Task</audio></h2>}
                {sectionName === "Reading" && <h5><span className="fw-bold fs-3">Task:</span>  {el.text}</h5>}
                {el.questionList ? el.questionList.map(q => (
                        <>
                            <TestAnswer
                                        question = {q}
                                        checkAnswers = {checkAnswers}
                                        setResult = {setResult}
                                        userData = {userData}
                                        setUserData = {setUserData}
                            />
                        </>
                    )
                ) : el.map(sample => (
                    <>
                        <p className="mb-1">{sample.qs}</p>
                        <p className="mb-3 px-4">{sample.answer}</p>
                    </>
                ))
                }
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
                                <h2 className='section-title'>{sectionName} test</h2>
                                <p className='section-text test'>
                                    {questionsToShow}
                                </p>

                                <Button variant="primary" onClick={handleCheck} className="test-btn">Check</Button>
                                {userData.userAnswerList.length === 40 && <Button variant="primary" onClick={handleSubmit} className="test-btn mt-2">Submit</Button>}
                                {showResult && <h6 className="result-text">Your result: {result}</h6>}
                            </Container>
                        </Container>
                    </Col>
                </Row>
        </Container>
        </>
    )}

export default TestForm;