import "./App.css";

import { useDispatch, useSelector } from "react-redux";

import {
  decrement,
  increaseAmount,
  increment,
} from "./redux/slices/counterSlices";

function App() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state?.counter);
  return (
    <div className="App">
      <h1>Redux Toolkit..</h1>
      <h2>Counter: {counter?.value}</h2>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(increaseAmount(5))}>
        IncreaseByAmount
      </button>
    </div>
  );
}

export default App;
