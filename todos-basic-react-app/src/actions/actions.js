export const addTextTask = (txt) => ({
  type: "ADD_TEXT",
  payload: txt,
});
export const addTask = (id, txt) => ({
  type: "ADD_TODO",
  payload: { id, txt },
});
export const deleteTask = (id) => ({ type: "DELETE_TODO", payload: id });
export const editTask = (id, edit) => ({
  type: "EDIT_TODO",
  payload: { id, edit },
});
export const editTextTask = (id, txt) => ({
  type: "EDIT_TEXT_TODO",
  payload: { id, txt },
});
export const completedAmountTasks = () => ({
  type: "AMOUNT_COMPLETED_TODO",
});
export const completedTask = (id) => ({
  type: "COMPLETED_TODO",
  payload: id,
});
