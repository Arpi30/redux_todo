import { useSelector } from "react-redux";
import { CompletedTodos } from "./completed-todos";
import { ItemsList } from "../Ui/itemsList";

export const Items = () => {
  const items = useSelector((state) => state.todo);

  return (
    <div className="d-flex flex-column justify-content-center align-items-center w-100">
      {items.map((todo) => {
        return <ItemsList {...todo} key={todo.id} />;
      })}
      <CompletedTodos />
    </div>
  );
};
