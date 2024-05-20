import { useState, useEffect } from "react";

export default function ProgressBar({ timer }) {
  const [remainingTime, setRemainingTime] = useState(timer);
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("TIMER interval");
      setRemainingTime((pevTime) => pevTime - 10);
    }, 10);

    return () => {
      console.log("Cleaning interval");
      clearInterval(interval);
    };
  }, []);
  return (
    <>
      <progress value={remainingTime} max={timer} />
    </>
  );
}
