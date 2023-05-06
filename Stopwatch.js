import React, { useRef, useState } from "react";
import "./Stopwatch.css";

const Stopwatch = () => {
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  const intervalRef = useRef(null);

  function handleStart() {
    setStartTime(Date.now());
    setNow(Date.now());
    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  }

  function handleStop() {
    clearInterval(intervalRef.current);
  }

  let secondPassed = 0;
  if (startTime != null && now != null) {
    secondPassed = (now - startTime) / 1000;
  }

  return (
    <>
      <h1>Stop Watch</h1>
      <h2 className="stop-watch">Time Passed : {secondPassed.toFixed(2)}</h2>
      <div className="btn">
        <button className="btn-1" onClick={handleStart}>
          Start
        </button>
        <button className="btn-1" onClick={handleStop}>
          Stop
        </button>
      </div>
    </>
  );
};

export default Stopwatch;
