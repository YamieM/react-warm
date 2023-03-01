import { useEffect, useRef } from "react";
import "./style.css";
const TimerString = () => {
  const timeH1 = useRef(null);
  const timer = () => {
    window.setInterval(() => {
      let now = new Date();
      timeH1.current.innerHTML = now.toLocaleTimeString("it-IT");
      return timeH1;
    }, 1000);
  };

  useEffect(() => {
    timer();
  });

  return <h1 ref={timeH1} className="timer-h1"> </h1>;
};

export default TimerString;
