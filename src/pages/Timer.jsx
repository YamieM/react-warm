import Counter from "../components/counter/Counter";
import TimerString from "../components/timeString/TimerString";

const Timer = () => {
  return (
    <main className="section">
      <div className="timer-container">
        <TimerString />
      </div>
      <Counter />
    </main>
  );
};

export default Timer;
