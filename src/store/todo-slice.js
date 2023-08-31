import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: [
    {
      id: Date.now(),
      title: "My Todo",
      completed: false,
      modify: false,
    },
  ],
  reducers: {
    addTodo(state, action) {
      const newItem = action.payload;
      const existingItem = state.find((item) => item.id === newItem.id);
      const todoItems = {
        id: newItem.id,
        title: newItem.title,
        completed: false,
        modify: false,
      };
      if (!existingItem) {
        state.push(todoItems);
      }
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
    setTodoData(state, action) {
      return action.payload;
    },
  },
});

export const fetchedTodoData = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        "https://todo-with-redux-f4f83-default-rtdb.firebaseio.com/todo.json"
      );
      if (!response.ok) {
        throw new Error("Fetching data failed");
      }
      const data = await response.json();
      console.log(data);
      dispatch(setTodoData(data));
    } catch (error) {}
  };
};

export const sendTodoData = (todo) => {
  return async () => {
    const response = await fetch(
      "https://todo-with-redux-f4f83-default-rtdb.firebaseio.com/todo.json",
      { method: "PUT", body: JSON.stringify(todo) }
    );
    if (!response.ok) {
      throw new Error("Sending todo failed");
    }
  };
};

export const { addTodo, todoCompleted, deleteTodos, modifyTodo, setTodoData } =
  todoSlice.actions;
export default todoSlice;
