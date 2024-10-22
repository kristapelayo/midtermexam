import React, { useState } from 'react';
import './App.css';

function Key({ label, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {label}
    </button>
  );
}

function Display({ value }) {
  return (
    <div className="display">
      {value}
    </div>
  );
}

function App() {
  const [displayValue, setDisplayValue] = useState("10 Things That Require Zero Talent");
  const fullName = "KRISTA JEZEL PELAYO - IT3A";

  const handleKeyPress = (key) => {
    const items = {
      1: "Being On Time",
      2: "Making An Effort",
      3: "Being High Energy",
      4: "Having A Positive Attitude",
      5: "Being Passionate",
      6: "Using Good Body Language",
      7: "Being Coachable",
      8: "Doing A Little Extra",
      9: "Being Prepared",
      0: "Having A Strong Work Ethic",
    };

    if (key === "RESET") {
      setDisplayValue("10 Things That Require Zero Talent");
    } else if (key === "NAME") {
      setDisplayValue(fullName.toUpperCase());
    } else if (items[key]) {
      setDisplayValue(items[key]);
    }
  };

  return (
    <div className="app">
      <h1 className='head'>{fullName}</h1>
      <Display value={displayValue} />
      <div className="buttons">
        {Object.keys({ 1: null, 2: null, 3: null, 4: null, 5: null, 6: null, 7: null, 8: null, 9: null, 0: null }).map(key => (
          <Key key={key} label={key} onClick={() => handleKeyPress(key)} />
        ))}
        <Key label="RESET" onClick={() => handleKeyPress("RESET")} />
        <Key label="NAME" onClick={() => handleKeyPress("NAME")} />
      </div>
    </div>
  );
}

export default App;
