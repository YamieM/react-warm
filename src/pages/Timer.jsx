import Counter from "../components/counter/Counter";
import Dates from "../components/dates/Dates";
import TimerString from "../components/timeString/TimerString";

const Timer = () => {
  return (
    <main className="section">
      <div className="timer-container">
        <TimerString />
      </div>
      <Counter />
      <Dates />
    </main>
  );
};

export default Timer;
