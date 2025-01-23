import React, { useState } from "react";
import classes from "./Counter.module.scss";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div className={classes.btn}>
      <button onClick={handleClick}>increment {count}</button>
    </div>
  );
};
