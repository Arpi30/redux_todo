import "./App.css";
import { TodoForm } from "./components/Form/form";
import { Items } from "./components/items/items";

function App() {
  return (
    <div className="App w-50">
      <TodoForm />
      <Items />
    </div>
  );
}

export default App;
