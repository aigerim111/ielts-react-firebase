import React, {useEffect, useState} from "react";

function TextAnswer(props){

    const question = props.question
    const answerType = question.answerType
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
                    <><input type="text"
                            className="text-input"
                            value={selectedAnswer}
                            onChange={handleChange}/></>
                )
            case "select":
                return (
                    <><select onChange={handleChange} className="select">
                        {question.options.map((option) => (
                            <option value={option}>{option}</option>
                        ))}
                    </select></>
                )
        }
    }

    return (
        <>
            <h4>{question.testQuestion}</h4>
            <div className="flex-container center">
                {setType()}
                {showAnswer && <p className="right-answer-text">Right!</p>}
            </div>
        </>
    )
}

export default TextAnswer;