import "./App.css";
import { TodoForm } from "./components/Form/form";
import { Items } from "./components/items/items";
import { sendTodoData, fetchedTodoData } from "../src/store/todo-slice";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const todo = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchedTodoData());
  }, [dispatch]);

  useEffect(() => {
    dispatch(sendTodoData(todo));
  }, [todo, dispatch]);
  return (
    <div className="App w-50">
      <TodoForm />
      <Items />
    </div>
  );
}

export default App;
