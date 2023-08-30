import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: [],
  reducers: {
    addTodo(state, action) {
      const todoItems = {
        id: Date.now(),
        title: action.payload.title,
        completed: false,
        modify: false,
      };
      state.push(todoItems);
    },
    todoCompleted(state, action) {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index].completed = action.payload.completed;
    },
    deleteTodos(state, action) {
      return state.filter((todo) => todo.id !== action.payload.id);
    },
    modifyTodo(state, action) {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index].modify = action.payload.modify;
      if (!state[index].modify) {
        state[index].title = action.payload.title;
      }
    },
  },
});

export const { addTodo, todoCompleted, deleteTodos, modifyTodo } =
  todoSlice.actions;
export default todoSlice;
