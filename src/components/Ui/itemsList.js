import { todoCompleted, deleteTodos, modifyTodo } from "../../store/todo-slice";
import { useDispatch } from "react-redux";
import { useRef } from "react";

export const ItemsList = (props) => {
  const dispatch = useDispatch();
  const inputRef = useRef();

  const { title, id, completed, modify } = props;

  const CompletedHandler = () => {
    dispatch(
      todoCompleted({
        id: id,
        completed: !completed,
      })
    );
  };
  const deleteTodoItems = () => {
    dispatch(
      deleteTodos({
        id: id,
      })
    );
  };
  const modifyHandler = () => {
    dispatch(
      modifyTodo({
        id: id,
        modify: !modify,
        title: modify && inputRef.current.value,
      })
    );
  };
  return (
    <div
      className={`${
        completed ? "bg-success bg-opacity-50" : ""
      } w-50 d-flex flex-row justify-content-between p-2 border rounded my-1`}
      key={id}>
      <div className="d-flex flex-row align-items-cetner justify-content-center">
        <input
          type="checkbox"
          defaultChecked={completed}
          onChange={CompletedHandler}
        />
        {modify ? (
          <input
            ref={inputRef}
            type="text"
            className="form-control mx-2"
            placeholder="Change Todo"
          />
        ) : (
          <span className="px-2">{title}</span>
        )}
      </div>
      <div>
        <button onClick={deleteTodoItems} className="btn btn-danger ">
          Delete
        </button>
        <button onClick={modifyHandler} className="btn btn-warning mx-2">
          {modify ? "Save" : "Modify"}
        </button>
      </div>
    </div>
  );
};
