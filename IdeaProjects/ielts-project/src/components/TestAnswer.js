import React, {useEffect, useState} from "react";

function TestAnswer(props){

    const question = props.question
    const answerType = question.questionType
    const [selectedAnswer, setSelectedAnswer] = useState("")
    const [showAnswer, setShowAnswer] = useState(false)

    function handleChange(e){
        setSelectedAnswer(e.target.value)
    }

    //observes checkAnswer to start checking chosen answer and then says right or not
    useEffect(() => {
        if(selectedAnswer == question.rightAnswer){
            setShowAnswer(true)
            props.setResult(prev => prev + 1)
            console.log("Result after adding 1" + props.result)
        } else {
            setShowAnswer(false)
        }
    }, [props.checkAnswers])


    function setType(){
        switch (answerType){
            case "text":
                return(
                    <>
                        <input type="text"
                            className="text-input px-1 fs-0"
                            value={selectedAnswer}
                            onChange={handleChange}/></>
                )
            case "MCQ":
                return (
                    <div className="mt-0">
                        {question.options &&
                        <select onChange={handleChange} className="select p-1 fs-0">
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
                            <select onChange={handleChange} className="select p-1 fs-0">
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
                {showAnswer && <p className="right-answer-text">Right!</p>}
            </div>
        </>
    )
}

export default TestAnswer;