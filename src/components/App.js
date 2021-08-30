import React, { useEffect, useState } from "react";
import "./App.css";
import "./Button"
import Button from "./Button";

const buttons = ["AC", "±", "%", "÷", "7", "8", "9", "x", "4", "5", "6", "-", "1", "2", "3", "+", "0", ".", "="];

function App() {
  const [time, setTime] = useState(new Date())
  const [value, setValue] = useState("0")
  const [memory, setMemory] = useState(null)
  const [operator, setOperator] = useState(null)

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setTime(date)
    }, 1000)
  }, [])


  const handleButtonClick = content => () => {
    const num = parseFloat(value)

    if (content === "AC") {
      setValue("0");
      setMemory(null)
      setOperator(null)
      return
    }

    if (content === '±') {
      setValue((num * -1).toString())
      setMemory(null)
      setOperator(null)
      return;
    }

    if (content === "%") {
      setValue((num / 100).toString())
      setMemory(null)
      setOperator(null)
      return
    }

    if (content === ".") {
      if (value.includes(".")) return;

      setValue(value + ".")
      return
    }

    if (content === "+") {

      if (operator != null) {
        if (operator === "+") {
          setMemory((memory + parseFloat(value)))
        }
        else if (operator === "-") {
          setMemory((memory - parseFloat(value)))
        }
        else if (operator === "x") {
          setMemory((memory * parseFloat(value)))
        }
        else if (operator === "÷") {
          setMemory((memory / parseFloat(value)))
        }
      }
      else {
        setMemory(parseFloat(value))
      }

      setValue("0")
      setOperator("+")
      return
    }

    if (content === "-") {
      if (operator != null) {
        if (operator === "+") {
          setMemory((memory + parseFloat(value)))
        }
        else if (operator === "-") {
          setMemory((memory - parseFloat(value)))
        }
        else if (operator === "x") {
          setMemory((memory * parseFloat(value)))
        }
        else if (operator === "÷") {
          setMemory((memory / parseFloat(value)))
        }
      }
      else {
        setMemory(parseFloat(value))
      }
      setValue("0")
      setOperator("-")
      return
    }

    if (content === "x") {
      if (operator != null) {
        if (operator === "+") {
          setMemory((memory + parseFloat(value)))
        }
        else if (operator === "-") {
          setMemory((memory - parseFloat(value)))
        }
        else if (operator === "x") {
          setMemory((memory * parseFloat(value)))
        }
        else if (operator === "÷") {
          setMemory((memory / parseFloat(value)))
        }
      }
      else {
        setMemory(parseFloat(value))
      }
      setValue("0")
      setOperator("x")
      return
    }

    if (content === "÷") {
      if (operator != null) {
        if (operator === "+") {
          setMemory((memory + parseFloat(value)))
        }
        else if (operator === "-") {
          setMemory((memory - parseFloat(value)))
        }
        else if (operator === "x") {
          setMemory((memory * parseFloat(value)))
        }
        else if (operator === "÷") {
          setMemory((memory / parseFloat(value)))
        }
      }
      else {
        setMemory(parseFloat(value))
      }
      setValue("0")
      setOperator("÷")
      return
    }

    if (content === "=") {
      if (!operator) {
        return
      }

      if (operator === "+") {
        setValue((memory + parseFloat(value)).toString())
      }
      else if (operator === "-") {
        setValue((memory - parseFloat(value)).toString())
      }
      else if (operator === "x") {
        setValue((memory * parseFloat(value)).toString())
      }
      else if (operator === "÷") {
        setValue((memory / parseFloat(value)).toString())
      }


      setMemory(null)
      setOperator(null)
      return
    }


    if (value[value.length - 1] === '.') {
      setValue(value + content)
    }
    else {
      setValue(parseFloat(num + content).toString())
    }

  }



  return (
    <div className="App">
      <div className="top">{time.getHours().toString().padStart(2, '0')}
        :{time.getMinutes().toString().padStart(2, '0')}
        :{time.getSeconds().toString().padStart(2, '0')}
      </div>
      <div className="display">{value}</div>
      <div className="buttons">
        {
          buttons.map(b => {
            if (b === "AC" || b === "±" || b === "%") {
              return <Button content={b} type="function" onButtonClick={handleButtonClick}  key={b}></Button>
            }
            else if (b === "÷" || b === "x" || b === "-" || b === "+" || b === "=") {
              return <Button content={b} type="operator" onButtonClick={handleButtonClick} key={b}></Button>
            }
            return (
              <Button content={b} onButtonClick={handleButtonClick} key={b}></Button>
            )
          })
        }
      </div>

    </div>
  );
}

export default App;
