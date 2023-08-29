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
        title: inputRef.current.value,
      })
    );
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "35vh" }}>
      <form className="w-25" onSubmit={onSubmitHandler}>
        <div className="mb-3">
          <label htmlFor="todo" className="form-label">
            Add todo
          </label>
          <input
            ref={inputRef}
            type="text"
            className="form-control"
            id="todo"
            placeholder="Add dTodo"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};
