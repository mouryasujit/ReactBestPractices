import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "hello jee kaise ho saare" }],
};
const TodoSlice = createSlice({
  name: "Todo",
  initialState,
  reducers: {
    AddTodo: (state, actions) => {
      console.log(actions.payload);
      const addTodo = {
        id: nanoid(),
        text: actions.payload,
      };
      state.todos.push(addTodo);
    },
    RemoveTodo: (state, actions) => {
      state.todos = state.todos.filter((todo) => todo.id !== actions.payload);
    },
    UpdateTodo: (state, actions) => {
      state.todos[actions.payload.idx].text = actions.payload.text;
    },
  },
});
export const { AddTodo, RemoveTodo, UpdateTodo } = TodoSlice.actions;
export default TodoSlice.reducer;
