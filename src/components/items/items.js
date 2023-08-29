import { useSelector } from "react-redux/es/hooks/useSelector";

export const Items = () => {
  const items = useSelector((state) => state.todo);

  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      {items.map((todo) => {
        return (
          <div
            className={`${
              todo.completed ? "bg-success bg-opacity-50" : ""
            } w-25 d-flex flex-row justify-content-between p-2 border rounded my-1`}
            key={todo.id}>
            <div className="d-flex flex-row align-items-cetner justify-content-center">
              <input type="checkbox" defaultChecked={todo.completed} />
              <span className="px-2">{todo.title}</span>
            </div>
            <button className="btn btn-danger">Delete</button>
          </div>
        );
      })}
    </div>
  );
};
