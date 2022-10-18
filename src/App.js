import React, { useState } from "react";
import "./App.css";

function App() {
  const [initValue, setNumber] = useState(0);

  const addHandler = () => {
    setNumber(initValue + 1);
  };
  const subtractHandler = () => {
    setNumber(initValue - 1);
  };

  const resetHandler = () => {
    setNumber(0);
  };
  let borderColor = "#f7fafd";
  if (initValue === 0) {
    borderColor = "#f7fafd";
  } else if (initValue > 0) {
    borderColor = "#588157";
  } else {
    borderColor = "#e56b6f";
  }
  return (
    <div className="App">
      <div className="container">
        <h1>Counter application</h1>
        <div className="circle border" style={{ borderColor }}>
          <p className="number num-color ">{initValue}</p>
        </div>
        <div className="btn">
          <button className="add" onClick={addHandler}>
            {" "}
            Add
          </button>
          <button className="subtract" onClick={subtractHandler}>
            {" "}
            Subtract
          </button>
          <button className="reset" onClick={resetHandler}>
            {" "}
            reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
