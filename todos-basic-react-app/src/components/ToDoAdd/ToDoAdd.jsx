// redux
import { useDispatch, useSelector } from "react-redux";
import { addTask, addTextTask } from "../../actions/actions";

// styles
import "./ToDoAdd.scss";

export default function ToDoAdd() {
  const listTask = useSelector((state) => state.listToDo);
  const textTask = useSelector((state) => state.textNewTodo);
  const dispatch = useDispatch();

  const nextID = (list) => {
    return list.reduce((maxID, todo) => Math.max(maxID, todo.id), -1) + 1;
  };

  const onSetNewItem = () => {
    dispatch(addTask(nextID(listTask), textTask));
    dispatch(addTextTask(""));
  };

  return (
    <div className="todo-add-item">
      <input
        name="text"
        type="text"
        onKeyDown={(e) => (e.key === "Enter" ? onSetNewItem() : null)}
        value={textTask}
        placeholder="Create Todo Task"
        onChange={(e) => dispatch(addTextTask(e.target.value))}
      />
      <button
        onClick={() => onSetNewItem()}
        type="button"
        disabled={!textTask}
        className=" w-122 bg-todo-add text-base "
      >
        Add
      </button>
    </div>
  );
}
