import "./styles.css";

import { TodoProvider } from "./context/todoContext";
import TodoContainer from "./components/TodoContainer";
import TodoInput from "./components/TodoInput";
export default function App() {
  return (
    <TodoProvider>
      <div className="App">
        <h1>To Do List</h1>
        <TodoInput />
        <TodoContainer />
      </div>
    </TodoProvider>
  );
}
