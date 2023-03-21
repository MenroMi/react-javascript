// basic
import { useState, useEffect } from "react";

// styles
import "./Square.css";

export default function Square({
  value,
  isOver,
  onCurrStep,
  id,
  startChoice,
  reset,
  win,
}) {
  const [isClick, setClick] = useState(false);

  useEffect(() => {
    if (reset) {
      setClick(false);
    }
  }, [reset]);

  return (
    <button
      id={id}
      onClick={(e) => {
        if (isClick) {
          return null;
        } else {
          setClick(true);
          isOver();
          onCurrStep(e);
        }
      }}
      className={`square ${isClick ? "red" : ""}`}
      disabled={startChoice.length > 1 || win}
    >
      {value}
    </button>
  );
}
