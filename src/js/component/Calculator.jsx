import React, { useState } from "react";
import Digit from "./Digit";

const Calculator = () => {

    let number1 = "1"
    let number2 = "2"
    let sum = "+"
    let equal = "="
    const [firstNumber, setFirstNumber] = useState(null)
    const [secondNumber, setSecondNumber] = useState(null)
    const [operation, setOperation] = useState(null)
    const [result, setResult] = useState(null)

    function saveOperation(anyOperator) {
        setOperation(anyOperator) 
    }

    function saveNumber(anyNumber) {
        if(operation === null){
            firstNumber === null ? setFirstNumber(anyNumber) : setFirstNumber(firstNumber + anyNumber)
        }
        else {
            secondNumber === null ? setSecondNumber(anyNumber) : setSecondNumber(secondNumber + anyNumber)
        }
    }
    console.log(firstNumber);
    console.log(secondNumber);

    // function sum(num1, num2) {
    //     return num1 + num2
    // }

    function operationResult() {
        parseInt(firstNumber)
        parseInt(secondNumber)
        setResult(`${firstNumber} ${operation} ${secondNumber}`)
    }
    console.log(result)

	return (
		<>
        <input className="m-5" type="number" readOnly value={input}/>
        <button onClick={()=>saveNumber(number1)} className="digits text-center m-5 fw-semibold">{number1}</button>
        <button onClick={()=>saveNumber(number2)} className="digits text-center m-5 fw-semibold">{number2}</button>
        <button  className="digits text-center m-5 fw-semibold">+</button>
        <button onClick={operationResult} className="digits text-center m-5 fw-semibold">{"="}</button>
        </>
	);
};

export default Calculator;