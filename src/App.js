import React from "react";
import "./App.css";

const num = [7, 8, 9,4, 5, 6, 1, 2, 3,0];
const operator = ["/", "x", "-", "+", "="];

function App() {
  return (
    <div className="calculator">
      <div className="display" id="display">
        10
      </div>

      <div className="nums-container">
      <button className="light-grey ac big-v">AC</button>
        {num.map(n=>{
          return <button className={`dark-grey ${n===0 && "big-v"}`}>{n}</button>
        })}
      <button className="light-grey">.</button>
      </div>
      <div className="ops-container">
        {operator.map((o) => {

          return (
            <button key={o} className="orange">
              {o}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default App;
