import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div data-test="component-app">
      <h1 data-test="counter-display">The counter display is: </h1>
      <button data-test="increment-button">Increment button</button>
    </div>
  );
}

export default App;
