import { useState } from 'react';
import './App.css';

const App = () => {
  const[result, setResult] = useState("");

  const buttonClick = (e) => {
    setResult(result.concat(e.target.name));
  }
  const clear = () => {
    setResult("");
  }
  const backspace = () => {
    setResult(result.slice(0, result.length - 1)); //can also be done as -1
  }
//calculator breaks when changing eval function to math.evaluate (accepts input excludes output) 
  const calculate = () => {
    try {
      setResult(Math.evaluate(result).toString());
    } catch(err) {
      setResult("Error")
    }
  }
  return (
    <div className="container">
      <form>
          <input type="text" value={result} />
      </form>
      <div className="keypad">
        <button className="highlight" onClick={clear} id="clear">Clear</button>
        <button className="highlight" onClick={backspace} id="backspace">C</button>
        <button className="masd" name="/" onClick={buttonClick}>&divide;</button>
        <button name="7" onClick={buttonClick}>7</button>
        <button name="8" onClick={buttonClick}>8</button>
        <button name="9" onClick={buttonClick}>9</button>
        <button className="masd" name="*" onClick={buttonClick}>&times;</button>
        <button name="4" onClick={buttonClick}>4</button>
        <button name="5" onClick={buttonClick}>5</button>
        <button name="6" onClick={buttonClick}>6</button>
        <button className="masd" name="-" onClick={buttonClick}>&ndash;</button>
        <button name="1" onClick={buttonClick}>1</button>
        <button name="2" onClick={buttonClick}>2</button>
        <button name="3" onClick={buttonClick}>3</button>
        <button className="masd" name="+" onClick={buttonClick}>+</button>
        <button name="0" onClick={buttonClick}>0</button>
        <button name="." onClick={buttonClick}>.</button>
        <button className="masd" onClick={calculate} id="result">=</button>
      </div>
    </div>
  )
}
export default App;
