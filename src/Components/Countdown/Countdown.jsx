import React, { useState, useEffect } from "react";
import sfx from "../../assets/audio.mp3";

export const Countdown = ({ hr, min, sec }) => {
  const [over, setOver] = useState(false);
  const [paused, setPaused] = useState(true);
  const [[h, m, s], setTime] = useState([hr, min, sec]);

  const tick = () => {
    if (paused || over) {
      return;
    }
    if (h === 0 && m === 0 && s === 0) {
      setOver(true);
    } else if (m === 0 && s === 0) {
      setTime([h - 1, 59, 59]);
    } else if (s === 0) {
      setTime([h, m - 1, 59]);
    } else {
      setTime([h, m, s - 1]);
    }
  };

  const handleReset = () => {
    setTime([hr, min, sec]);
    setPaused(true);
    setOver(false);
  };

  const handlePause = () => setPaused(!paused);

  const fmt = (val) => val.toString().padStart(2, "0");

  useEffect(() => {
    let ticker = setInterval(() => tick(), 1000);
    return () => {
      clearInterval(ticker);
    };
  });

  if (m === 0 && s === 0) {
    const audio = new Audio(sfx);
    audio.play();
  }

  return (
    <>
      <h3 className="countdown">{`${fmt(m)}:${fmt(s)}`}</h3>
      {paused ? (
        <button onClick={handlePause}>Start</button>
      ) : (
        <button onClick={handleReset}>Stop</button>
      )}
    </>
  );
};
