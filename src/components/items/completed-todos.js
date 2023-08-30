import { useSelector } from "react-redux";

export const CompletedTodos = () => {
  const completedTodo = useSelector((state) =>
    state.todo.filter((todo) => todo.completed === true)
  );

  return <h4>Completed Todos: {completedTodo.length}</h4>;
};
