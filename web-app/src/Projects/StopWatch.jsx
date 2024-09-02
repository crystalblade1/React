import React, { useState, useRef } from 'react';

function StopWatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  const startTimer = () => {
    if (!isRunning) {
      setIsRunning(true);
      intervalRef.current = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 10);
    }
  };

  const stopTimer = () => {
    if (isRunning) {
      clearInterval(intervalRef.current);
      setIsRunning(false);
    }
  };

  const resetTimer = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setTime(0);
  };

  const formatTime = (time) => {
    const getSeconds = `0${time % 60}`.slice(-2);
    const minutes = `${Math.floor(time / 60)}`;
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(time / 3600)}`.slice(-2);
    return `${getHours}:${getMinutes}:${getSeconds}`;
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Stopwatch</h1>
      <div style={{ fontSize: '48px', marginBottom: '20px' }}>
        {formatTime(time)}
      </div>
      <button onClick={startTimer} style={buttonStyle}>Start</button>
      <button onClick={stopTimer} style={buttonStyle}>Stop</button>
      <button onClick={resetTimer} style={buttonStyle}>Reset</button>
    </div>
  );
}

const buttonStyle = {
  margin: '5px',
  padding: '10px 20px',
  fontSize: '16px',
};

export default StopWatch;
