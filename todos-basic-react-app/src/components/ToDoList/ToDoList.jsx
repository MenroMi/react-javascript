// redux
import { useSelector } from "react-redux";

// components
import ToDoItem from "../ToDoItem/ToDoItem";

// styles
import "./ToDoList.scss";

export default function ToDoList() {
  const listTask = useSelector((state) => state.listToDo);

  return (
    <div className="todo-list">
      {listTask.map(({ text, id, edit, ...rest }) => {
        return <ToDoItem text={text} edit={edit} key={id} id={id} {...rest} />;
      })}
    </div>
  );
}
