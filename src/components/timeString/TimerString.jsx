import { useState, useEffect } from "react";
import "./style.css";

const TimerString = () => {
  const [timeString, setTimeString] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTimeString(new Date());
    }, 1000);
    return () => clearInterval(timerId);
  }, [timeString]);

  return <h1 className="timer-h1">{timeString.toLocaleString()}</h1>;
};

export default TimerString;
