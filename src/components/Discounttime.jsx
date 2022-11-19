import React from "react";
import { useState, useEffect } from "react";
const Discounttime = ({ hoursMinSecs }) => {
  const { hours = 0, minutes = 0, seconds = 60 } = hoursMinSecs;
  const [[hrs, mins, secs], setTime] = useState([hours, minutes, seconds]);
  
  const count = () => {
    if (hrs === 0 && mins === 0 && secs === 0) reset();
    else if (mins === 0 && secs === 0) {
      setTime([hrs - 1, 59, 59]);
    } else if (secs === 0) {
      setTime([hrs, mins - 1, 59]);
    } else {
      setTime([hrs, mins, secs - 1]);
    }
  };

  const reset = () =>
    setTime([parseInt(hours), parseInt(minutes), parseInt(seconds)]);

  useEffect(() => {
    const timerId = setInterval(() => count(), 1000);
    return () => clearInterval(timerId);
  });

  return (
    
      
      <div className="container mx-auto  flex  ">
        <div className=" mt-12 text-6xl flex flex-col ml-48">
          <span className="text-center">50%</span>
          <h2>Discount Time</h2>
        </div>

        <div className="count container mx-auto mt-10  w-80 h-40">
          <div className=" flex  ">
            <div className="timer container mx-auto flex gap-4 justify-center text-2xl ml-4 ">
              <p>Hours : </p>
              <p>Minutes : </p>
              <p>Second </p>
            </div>
          </div>
          <div>
            <p>{`${hrs.toString().padStart(2, "0")}:${mins
              .toString()
              .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`}</p>
          </div>
        </div>
      </div>
    
  );
};

export default Discounttime;
