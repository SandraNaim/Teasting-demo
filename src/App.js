import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div data-test="component-app">
      <h1 data-test="counter-display">
        The counter display is: <span data-test="count">{count}</span> 
      </h1>
      <button data-test="increment-button">Increment button</button>
    </div>
  );
}

export default App;
