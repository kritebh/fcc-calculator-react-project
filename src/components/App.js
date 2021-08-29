import React,{useState} from "react";
import "./App.css";
import "./Button"
import Button from "./Button";

const buttons = ["AC", "±", "%", "÷", "7", "8", "9", "x", "4", "5", "6", "-", "1", "2", "3", "+", "0", ".", "="];

function App() {

  const [value,setValue] = useState("0")

  const handleButtonClick =content=>()=>{
    const num = parseFloat(value)

    if(content==="AC"){
      setValue("0");
      return
    }

    if(content==='±'){
      if(num<0){
        setValue((num*-1).toString())
        return;
      }
    }


      setValue((num+content).toString())
  }





  return (
    <div className="App">
      <div className="top">11:35</div>
      <div className="display">{value}</div>
      <div className="buttons">
        {
          buttons.map(b => {
            if (b === "AC" || b === "±" || b === "%") {
              return <Button content={b} type="function" onButtonClick={handleButtonClick}></Button>
            }
            else if (b === "÷" || b === "x" || b === "-" || b === "+" || b === "=") {
              return <Button content={b} type="operator" onButtonClick={handleButtonClick}></Button>
            }
            return (
              <Button content={b} onButtonClick={handleButtonClick}></Button>
            )
          })
        }
      </div>
      <div className="bottom">-</div>
    </div>
  );
}

export default App;
