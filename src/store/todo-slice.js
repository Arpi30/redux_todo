import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: [
    {
      id: "1",
      title: "todo1",
      completed: false,
    },
    {
      id: "2",
      title: "todo2",
      completed: false,
    },
    {
      id: "3",
      title: "todo3",
      completed: true,
    },
  ],
  reducers: {
    addTodo(state, action) {
      const todoItems = {
        id: Date.now(),
        title: action.payload.title,
        completed: false,
      };
      state.push(todoItems);
    },
  },
});

export const { addTodo } = todoSlice.actions;
export default todoSlice;
