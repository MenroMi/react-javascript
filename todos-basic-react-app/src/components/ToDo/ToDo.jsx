// components
import ToDoAdd from "../ToDoAdd/ToDoAdd";
import ToDoCompleted from "../ToDoCompleted/ToDoCompleted";
import ToDoList from "../ToDoList/ToDoList";

// styles
import "./ToDo.scss";

export default function ToDo() {
  return (
    <div className="todo-app">
      <ToDoCompleted />
      <ToDoAdd />
      <ToDoList />
    </div>
  );
}
