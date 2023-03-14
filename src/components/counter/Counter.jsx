import { useState } from "react";
import "./style.css";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="counter-container">
      <h1 className="counter-title">Введите начальное значение</h1>
      <h1 className="counter-arrow">👇</h1>
      <input
        type="number"
        className="counter-input"
        onChange={(event) => {
          setCount(Number(event.target.value));
        }}
      />
      <h1 className="counter-count">{count}</h1>
      <div className="counter-buttons">
        <button className="counter-button" onClick={() => setCount(count - 1)}>
          -
        </button>
        <button className="counter-button" onClick={() => setCount(count + 1)}>
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
