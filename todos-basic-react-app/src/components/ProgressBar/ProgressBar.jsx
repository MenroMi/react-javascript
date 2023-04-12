import { useRef, useEffect, useState } from "react";
import "./ProgressBar.scss";

export default function ProgressBar({ loading }) {
  const [width, setWidth] = useState(1);
  const intervalRef = useRef();

  const onChangeWidth = () => {
    setWidth((w) => w + 1);
  };

  useEffect(() => {
    if (loading && width === 1) {
      intervalRef.current = setInterval(onChangeWidth);
    }

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [loading]);

  return (
    <div className="todo-wrapper">
      <span>completed</span>
      <div
        style={{
          width: `${width >= 100 ? "100" : width}%`,
        }}
        className="todo-progress-bar"
      ></div>
    </div>
  );
}
