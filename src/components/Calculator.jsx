import React, { useState, useEffect } from "react";

function Calculator() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const mathOperations = ["+", "-", "*", "/"];

  const [firstInputValue, setFirstInputValue] = useState("");
  const [secondInputValue, setSecondInputValue] = useState("");
  const [mathOperation, setmathOperation] = useState("");

  const [answer, setAnswer] = useState(0);

  useEffect(() => {
    console.log(answer);
  }, [answer]);

  function numbersActionInput(val) {
    if (operation == "") {
      setFirstInputValue(firstInputValue + val);
    } else {
      setSecondInputValue(secondInputValue + val);
    }
  }

  function actionOperation(val) {
    setOperation(val);
  }

  function workingOperation() {
    switch (mathOperation) {
      case "+":
        setAnswer(Number(firstInputValue) + Number(secondInputValue));
        break;
      case "-":
        setAnswer(Number(firstInputValue) - Number(secondInputValue));
        break;
      case "*":
        setAnswer(Number(firstInputValue) * Number(secondInputValue));
        break;
      case "/":
        setAnswer(Number(firstInputValue) / Number(secondInputValue));
        break;
    }
  }

  return (
    <div className="App">
      <div className="calculator">
        <div className="display">{answer}</div>
        <div className="buttons">
          <div className="leftSide">
            <div id="seeResult" onClick={workingOperation}>
              See Result
            </div>
            <div className="numbers">
              {numbers.map((val, key) => {
                return (
                  <div
                    id="individualNumber"
                    onClick={() => {
                      function numbersActionInput(val) {
                        (val);
                    }}
                  >
                    {" "}
                    {val}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="leftSide">
            {mathOperations.map((val, key) => {
              return (
                <div
                  id="operations"
                  onClick={() => {
                    actionOperation(val);
                  }}
                >
                  {" "}
                  {val}{" "}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}


  export default Calculator;