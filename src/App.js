import "./App.css";
import { TodoForm } from "./components/Form/form";
import { Items } from "./components/items/items";

function App() {
  return (
    <div className="App">
      <h2 className="text-center mt-5">Welcome to React Redux Todo app</h2>
      <TodoForm />
      <Items />
    </div>
  );
}

export default App;
