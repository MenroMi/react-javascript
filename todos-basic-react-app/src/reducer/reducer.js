const initState = {
  textNewTodo: "",
  textTodo: "",
  listToDo: [
    { text: "Buy a milk", completed: false, edit: false, id: 0 },
    { text: "Meet with friends", completed: false, edit: false, id: 1 },
    { text: "Help mom with cooking", completed: false, edit: false, id: 2 },
  ],
  completed: 0,
};

export default function reducer(state = initState, action) {
  switch (action.type) {
    case "ADD_TEXT":
      return { ...state, textNewTodo: action.payload };
    case "ADD_TODO":
      return {
        ...state,
        listToDo: [
          ...state.listToDo,
          {
            text: action.payload.txt,
            completed: false,
            edit: false,
            id: action.payload.id,
          },
        ],
      };
    case "DELETE_TODO":
      return {
        ...state,
        listToDo: [
          ...state.listToDo.filter((todo) => todo.id !== action.payload),
        ],
      };
    case "EDIT_TODO":
      return {
        ...state,
        listToDo: state.listToDo.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, edit: action.payload.edit }
            : todo
        ),
      };
    case "EDIT_TEXT_TODO":
      return {
        ...state,
        listToDo: state.listToDo.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, text: action.payload.txt }
            : todo
        ),
      };
    case "AMOUNT_COMPLETED_TODO":
      return {
        ...state,
        completed: state.completed + 1,
      };
    case "COMPLETED_TODO":
      return {
        ...state,
        listToDo: state.listToDo.map((todo) =>
          todo.id === action.payload ? { ...todo, completed: true } : todo
        ),
      };
    default:
      return state;
  }
}
