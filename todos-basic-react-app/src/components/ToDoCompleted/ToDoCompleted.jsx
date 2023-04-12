// redux
import { useSelector } from "react-redux";

// styles
import "./ToDoCompleted.scss";

export default function ToDoCompleted() {
  const count = useSelector((state) => state.completed);

  return (
    <>
      <div className="todo-completed">Completed:</div>
      <div className="todo-counter">
        <p>{count}</p>
      </div>
    </>
  );
}
