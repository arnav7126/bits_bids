import React, { useState, useEffect } from "react";

const CountdownTimer = ({ targetTime }) => {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const updateTimer = () => {
      const now = new Date();
      const target = new Date(now);
      const [hours, minutes, seconds] = targetTime.split(":").map(Number);
      target.setHours(hours, minutes, seconds, 0);

      const difference = target - now;
      let timeLeftString = "";

      if (difference > 0) {
        const hoursLeft = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutesLeft = Math.floor((difference / 1000 / 60) % 60);
        const secondsLeft = Math.floor((difference / 1000) % 60);

        timeLeftString =
          `${hoursLeft.toString().padStart(2, "0")}hr:` +
          `${minutesLeft.toString().padStart(2, "0")}min:` +
          `${secondsLeft.toString().padStart(2, "0")}sec`;
      } else {
        timeLeftString = "00hr:00min:00sec";
      }

      setTimeLeft(timeLeftString);
    };

    const intervalId = setInterval(updateTimer, 1000);
    updateTimer(); // run it once immediately to show initial value

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, [targetTime]);

  return <div>{timeLeft}</div>;
};

export default CountdownTimer;
