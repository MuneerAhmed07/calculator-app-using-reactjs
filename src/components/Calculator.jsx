import { useState } from "react";

const Calculator = () => {

    const [input, setInput] = useState('');
    const [result, setResult] = useState(0);

    //update input when button is clicked
    const handleInput = (value) => {
        setInput((prevInput) => prevInput + value);
    }

    // remove Last character from Input
    const removeLastChar = () => {
        setInput((prevInput) => prevInput.slice(0, -1));
        setResult(0)
    }

    // Clear input
    const clearInput = () => {
        setInput('');
        setResult(0);
    }

    // Calcualte the Result
    const calculateResult = () => {
        try{
            setResult(eval(input));
        }catch (error) {
            setResult("Error");
        }
    }

  return (
    <>
     <div className="calculator-box">
        <div className="display">
            <input type="text" value={input} readOnly />
            <div className="results">{result}</div>
        </div>
        <div className="btn-container">
            <button onClick={() => handleInput('7')}>7</button>
            <button onClick={() => handleInput('8')}>8</button>
            <button onClick={() => handleInput('9')}>9</button>
            <button onClick={removeLastChar} className='del'>DEL</button>
            
            <button onClick={() => handleInput('4')}>4</button>
            <button onClick={() => handleInput('5')}>5</button>
            <button onClick={() => handleInput('6')}>6</button>
            <button onClick={() => handleInput('+')}>+</button>

            <button onClick={() => handleInput('1')}>1</button>
            <button onClick={() => handleInput("2")}>2</button>
            <button onClick={() => handleInput('3')}>3</button>
            <button onClick={() => handleInput('-')}>-</button>

            <button onClick={() => handleInput('.')}>.</button>
            <button onClick={() => handleInput('0')}>0</button>
            <button onClick={() => handleInput('/')}>/</button>
            <button onClick={() => handleInput('*')}>*</button>

            <button onClick={clearInput} className='reset'>RESET</button>
            <button onClick={calculateResult} className='equals'>=</button>
        </div>
     </div>
    </>
  )
}

export default Calculator;
