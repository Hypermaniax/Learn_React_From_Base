import { useState, useRef } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {
  const timer = useRef();
  const dialog = useRef();

  const [timeRemaining, setTimeremaining] = useState(targetTime * 1000);

  const timeisActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  if (timeRemaining <= 0) {
    setTimeremaining(targetTime * 1000);
    dialog.current.open();
    clearInterval(timer.current);
  }

  function handleStart() {
    timer.current = setInterval(() => {
      setTimeremaining((prevSetTimeRemaining) => prevSetTimeRemaining - 10);
    }, 10);
  }

  function handleStop() {
    clearInterval(timer.current);
    dialog.current.open();
  }

  return (
    <>
      <ResultModal ref={dialog} result="Lose" targetTime={targetTime} />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} Second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timeisActive ? handleStop : handleStart}>
            {timeisActive ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timeisActive ? "active" : undefined}>
          {timeisActive ? "Time is Running..." : "Timer inactive"}
        </p>
      </section>
    </>
  );
}
