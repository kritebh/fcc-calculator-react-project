import React from "react";
import "./App.css";
import "./Button"
import Button from "./Button";

const buttons = ["AC", "±", "%", "÷", 7, 8, 9, "x", 4, 5, 6, "-", 1, 2, 3, "+", 0, ".", "="];

function App() {
  return (
    <div className="App">
      <div className="top">11:35</div>
      <div className="display">0</div>
      <div className="buttons">
        {
          buttons.map(b => {
            if (b === "AC" || b === "±" || b === "%") {
              return <Button content={b} type="function"></Button>
            }
            else if (b === "÷" || b === "x" || b === "-" || b === "+" || b === "=") {
              return <Button content={b} type="operator"></Button>
            }
            return (
              <Button content={b}></Button>
            )
          })
        }
      </div>
      <div className="bottom">-</div>
    </div>
  );
}

export default App;
