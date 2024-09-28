import React, { useState } from 'react';
import './App.css';

function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  const handleChange1 = (event) => {
    setNum1(Number(event.target.value));
  };

  const handleChange2 = (event) => {
    setNum2(Number(event.target.value));
  };

  const sum = num1 + num2;

  return (
    <div className="App">
      <input
        type="number"
        value={num1}
        onChange={handleChange1}
        placeholder="Enter first number"
      />
      <input
        type="number"
        value={num2}
        onChange={handleChange2}
        placeholder="Enter second number"
      />
      <h1>Sum: {sum}</h1>
    </div>
  );
}

export default App;