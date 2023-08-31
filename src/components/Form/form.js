import { useDispatch } from "react-redux";
import { addTodo } from "../../store/todo-slice";
import { useRef } from "react";

export const TodoForm = () => {
  const dispatch = useDispatch();
  const inputRef = useRef();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(
      addTodo({
        id: Date.now(),
        title: inputRef.current.value,
      })
    );
    inputRef.current.value = "";
  };

  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center "
      style={{ height: "35vh" }}>
      <h2>Welcome to my Todo App</h2>
      <form onSubmit={onSubmitHandler} className="w-50">
        <div className="mb-3">
          <label htmlFor="todo" className="form-label">
            Add todo
          </label>
          <input
            ref={inputRef}
            type="text"
            className="form-control"
            id="todo"
            placeholder="Add Todo"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};
