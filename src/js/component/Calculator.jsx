import React, { useState } from 'react'

const Calculator = () => {

    const [firstNumber, setFirstNumber] = useState("")
    const [secondNumber, setSecondNumber] = useState("")
    const [operator, setOperator] = useState("")
    const [finalResult, setFinalResult] = useState("")

    // OPERATION FUNCTIONS
    function sum(a,b) {
        return a + b
    }
    function subtract(a,b) {
        return a - b
    }
    function multiply(a,b) {
        return a * b
    }
    function divide(a,b) {
        return a / b
    }
    function divideByOneHundred(a) {
        return a / 100
    }

    const calculateResult = () => {
        const number1 = parseFloat(firstNumber)
        const number2 = parseFloat(secondNumber)
        let result = 0
        switch(operator){
            case "+": 
                result = sum(number1, number2); 
                break;
            case "-": 
                result = subtract(number1, number2); 
                break;
            case "x": 
                result = multiply(number1, number2); 
                break;            
            case "/": 
                result = divide(number1, number2); 
                break;
            case "%": 
                result = divideByOneHundred(number1); 
                break;
        }
        setFirstNumber("")
        setOperator("")
        setSecondNumber("")
        setFinalResult(String(result)) 
    }

    function checkResult() {
        if(finalResult !== "") {
            setFirstNumber(finalResult)
        }
        setFinalResult("");
    }

    const handleInput = (value) => {
        checkResult()
        if(!operator) {
            setFirstNumber(firstNumber + value)
        } else {
            setSecondNumber(secondNumber + value)
        }
    }

    const handleOperator = (simbol) => {
        checkResult()
        setOperator(simbol)
    }

    const resetCalculator = () => {
        setFirstNumber("")
        setOperator("")
        setSecondNumber("")
        setFinalResult("")
    }

  return (
    <>
        <input type="text" className="show-result form-control mt-5 mx-1 bg-light" readOnly value={`${firstNumber}${operator}${secondNumber}${finalResult}`}/>
        <button onClick={()=> handleInput("0")} className="digits text-center m-1 fw-semibold">0</button>
        <button onClick={()=> handleInput("1")} className="digits text-center m-1 fw-semibold">1</button>
        <button onClick={()=> handleInput("2")} className="digits text-center m-1 fw-semibold">2</button>
        <button onClick={()=> handleInput("3")} className="digits text-center m-1 fw-semibold">3</button>
        <button onClick={()=> handleInput("4")} className="digits text-center m-1 fw-semibold">4</button>
        <button onClick={()=> handleInput("5")} className="digits text-center m-1 fw-semibold">5</button>
        <button onClick={()=> handleInput("6")} className="digits text-center m-1 fw-semibold">6</button>
        <button onClick={()=> handleInput("7")} className="digits text-center m-1 fw-semibold">7</button>
        <button onClick={()=> handleInput("8")} className="digits text-center m-1 fw-semibold">8</button>
        <button onClick={()=> handleInput("9")} className="digits text-center m-1 fw-semibold">9</button>
        <button onClick={()=> handleInput(".")} className="digits text-center m-1 fw-semibold">,</button>
        <button onClick={()=> handleOperator("+")} className="digits text-center m-1 fw-semibold">+</button>
        <button onClick={()=> handleOperator("-")} className="digits text-center m-1 fw-semibold">-</button>
        <button onClick={()=> handleOperator("x")} className="digits text-center m-1 fw-semibold">x</button>
        <button onClick={()=> handleOperator("/")} className="digits text-center m-1 fw-semibold">/</button>
        <button onClick={()=> handleOperator("%")} className="digits text-center m-1 fw-semibold">%</button>
        <button onClick={calculateResult} className="digits text-center m-1 fw-semibold">=</button>
        {!finalResult ? 
        <button onClick={resetCalculator} className="digits text-center m-1 fw-semibold">C</button>
        : <button onClick={resetCalculator} className="digits text-center m-1 fw-semibold">AC</button>
        }
    </>  
)
}

export default Calculator