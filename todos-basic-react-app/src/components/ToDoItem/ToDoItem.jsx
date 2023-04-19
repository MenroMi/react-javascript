// basic
import { useDispatch } from "react-redux";
import { memo, useRef, useState } from "react";

// redux
import {
  editTask,
  editTextTask,
  deleteTask,
  completedAmountTasks,
  completedTask,
} from "../../actions/actions";

//components
import ProgressBar from "../ProgressBar/ProgressBar";

// images
import iconEdit from "../../assets/icon-edit.png";
import iconDelete from "../../assets/icon-delete.png";

// styles
import "./ToDoItem.scss";

const ToDoItem = memo(({ text, id, edit }) => {
  const [loading, setLoading] = useState(false);

  const timeOutRef = useRef();
  const checkerRef = useRef(0);
  const classRef = useRef();
  const focusRef = useRef(null);
  const dispatch = useDispatch();

  const handleFocus = () => focusRef.current.focus();

  const completeTask = () => {
    setLoading(false);
    dispatch(completedAmountTasks());
    dispatch(completedTask(id));
    dispatch(deleteTask(id));
  };

  const onSetTimeOut = () => {
    // start a timer so that the todos is considered completed
    const ifer = () => {
      if (checkerRef.current === 0) {
        setLoading(true);
      }
      checkerRef.current++;
      if (checkerRef.current < 2) {
        timeOutRef.current = setTimeout(ifer, 1000);
      }

      if (checkerRef.current === 2) {
        classRef.current.classList.add("completed");
        setTimeout(() => {
          completeTask();
        }, 400);
      }
    };

    if (!edit) timeOutRef.current = setTimeout(ifer, 400);
  };

  const onStopTimeOut = () => {
    setLoading(false);
    checkerRef.current = 0;
    clearTimeout(timeOutRef.current);
  };

  return (
    <div
      onMouseDown={() => onSetTimeOut()}
      onMouseUp={() => onStopTimeOut()}
      ref={classRef}
      className="todo-item"
    >
      {loading ? <ProgressBar loading={loading} /> : null}
      <div className={`todo-item-wrapper ${loading ? "loading" : ""}`}>
        <input
          type="text"
          name="message"
          ref={focusRef}
          onKeyDown={(e) =>
            e.key === "Enter" ? dispatch(editTask(id, !edit)) : null
          }
          onChange={(e) => dispatch(editTextTask(id, e.target.value))}
          defaultValue={text}
          disabled={!edit}
        />
        <button
          onClick={() => {
            dispatch(editTask(id, !edit));
            setTimeout(handleFocus);
          }}
          type="button"
          className="todo-item__edit"
        >
          <img src={iconEdit} alt="button for edit your todo item" />
        </button>
        <button
          onClick={() => dispatch(deleteTask(id))}
          type="button"
          className="todo-item__delete"
        >
          <img src={iconDelete} alt="button for remove your todo item" />
        </button>
      </div>
    </div>
  );
});

export default ToDoItem;
