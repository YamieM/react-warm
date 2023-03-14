import { useCallback, useState } from "react";
import "./style.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  const valueUp = useCallback(() => {
    setCount(count - 1);
  }, [count]);

  const valueDown = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  const onInputChange = useCallback((event) => {
    setCount(Number(event.target.value));
  }, []);

  return (
    <div className="counter-container">
      <h1 className="counter-title">Введите начальное значение</h1>
      <h1 className="counter-arrow">👇</h1>
      <input type="number" className="counter-input" onChange={onInputChange} />
      <h1 className="counter-count">{count}</h1>
      <div className="counter-buttons">
        <button className="counter-button" onClick={valueUp}>
          -
        </button>
        <button className="counter-button" onClick={valueDown}>
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
