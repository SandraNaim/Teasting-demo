import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div data-test="component-app">
      <h1 data-test="counter-display">
        The counter display is: <span data-test="count">{count}</span> 
      </h1>
      <button 
        data-test="increment-button"
        onClick={() => setCount(count + 1)}
      >Increment button</button>
    </div>
  );
}

export default App;
