import React, {useEffect,useRef, useState} from "react";
import {auth} from "../firebaseConfig";

function TestAnswer(props){

    const question = props.question
    const answerType = question.questionType
    const [selectedAnswer, setSelectedAnswer] = useState("")
    // const [showAnswer, setShowAnswer] = useState(false)
    const [isAnswered, setIsAnswered] = useState(false)

    function handleChange(e){
        setSelectedAnswer(e.target.value)
    }

    const firstRun = useRef(true)

    //observes checkAnswer to start checking chosen answer and then says right or not
    useEffect(() => {
            if(firstRun.current){
                firstRun.current = false
                return;
            }

            if(selectedAnswer && !isAnswered){
                if (selectedAnswer === question.rightAnswer) {
                    // setShowAnswer(true)
                    props.setResult(prev => prev + 1)
                }
                // else {
                //     setShowAnswer(false)
                // }

                const prevUserAnswerList = props.userData.userAnswerList
                prevUserAnswerList.push(question.id+"."+selectedAnswer)
                props.setUserData(({...props.userData, userAnswerList: prevUserAnswerList, userId: auth.currentUser.uid}))
                setIsAnswered(true)
            }

    },[props.checkAnswers])


    function setType(){
        switch (answerType){
            case "text":
                return(
                    <>
                        <input type="text"
                               disabled={isAnswered}
                            className="text-input px-1 fs-0"
                            value={selectedAnswer}
                            onChange={handleChange}/></>
                )
            case "MCQ":
                return (
                    <div className="mt-0">
                        {question.options &&
                        <select onChange={handleChange} className="select p-1 fs-0" disabled={isAnswered}>
                            <option>Select</option>
                            {question.options.map((option) => (
                                    <option value={option} >{option}</option>
                                ))}
                                </select>
                            }</div>
                )
            case "TF":
                return (
                    <div className="mt-0">
                        <select onChange={handleChange} className="select p-1 fs-0" disabled={isAnswered}>
                                <option>Select</option>
                                {["true", "false", "not given"].map((option) => (
                                    <option value={option} >{option}</option>
                                ))}
                            </select>
                        </div>
                )
        }
    }

    return (
        <>
            <p className="mb-1">{question.id}.  {question.qs}</p>
            <div className="flex-container center mb-4">
                {setType()}
                {/*{showAnswer && <p className="right-answer-text">Right!</p>}*/}
            </div>
        </>
    )
}

export default TestAnswer;