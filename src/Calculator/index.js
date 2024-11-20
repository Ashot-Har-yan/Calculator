import { useState } from 'react';
import { evaluate } from 'mathjs';
import './index.css';


const Calculator = ()=>{
    const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleEvaluate = () => {
    try {
      setInput(evaluate(input).toString());
    } catch (error) {
      setInput("Error");
    }
  };

  const handleClear = () => {
    setInput("");
  };

  const handleBackspace = () => {
    setInput(input.slice(0, -1));
  };
  const handlePercent = () => {
    try {
      const result = evaluate(input) / 100; 
      setInput(result.toString());
    } catch (error) {
      setInput("Error");
    }
  };
  return (
    <div className="calculator">
      <div className="display">
        <input type="text" value={input} readOnly />
      </div>
      <div className="buttons">
        <button onClick={handleClear}>C</button>
        <button onClick={handleBackspace}>←</button>
        <button onClick={handlePercent}>%</button>
        <button onClick={() => handleClick("/")}>/</button>
        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button onClick={() => handleClick("*")}>*</button>
        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button onClick={() => handleClick("-")}>-</button>
        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button onClick={() => handleClick("+")}>+</button>
        <button onClick={() => handleClick("0")}>0</button>
        <button onClick={handleEvaluate}>=</button>
      </div>
    </div>
  );
}
export default Calculator;