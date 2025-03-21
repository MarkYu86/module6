import { useState } from "react";
import './App.css';

function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operator, setOperator] = useState("+");
  const [result, setResult] = useState(null);

  const calculate= () => {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    if (isNaN(number1) || isNaN(number2)) {
      setResult("Enter numbers only");
      return;
    }
    let res;
    switch (operator) {
      case "+":
        res = number1 + number2;
        break;
      case "-":
        res = number1 - number2;
        break;
      case "*":
        res = number1 * number2;
        break;
      case "/":
        if (number2 === 0) {
          res = 'Number2 can not be "0"';
        } else {
          res = number1 / number2;
        }
        break;
      default:
        res = "Enter numbers only!";
    }
    setResult(res);
  };

  return (
    <div className="calc">
      <p>Calculator:</p>
      <input
        type="text"
        placeholder="Enter your number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />
      <select value={operator} onChange={(e) => setOperator(e.target.value)}>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>
      <input
        type="text"
        placeholder="Enter your number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />
      <button onClick={calculate}>=</button>
      <p>{result}</p>
    </div>
  );
}
export default Calculator;
