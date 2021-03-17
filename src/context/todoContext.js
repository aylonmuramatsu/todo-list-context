import { useState, createContext, useContext } from "react";
import { v4 as uuidv4 } from "uuid";

const initialValue = {
  todoList: []
};

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [current, setCurrent] = useState(null);
  const [list, setList] = useState([]);
  const AddTodoItem = (value) => {
    setList((props) => [...props, { value, id: uuidv4(), order: list.length  }]);
  };

  const DeleteTodoItem = (id) => {
    setList((props) => [...props.filter((i) => i.id !== id)]);
  };

  const EditTodoItem = (id, value) => {
    setList((prop) => [...prop.map(i => i.id === id ? ({...i, value}) : i)] )
    setCurrent(null)
  }

  return (
    <TodoContext.Provider
      value={{ list, current, AddTodoItem, DeleteTodoItem,EditTodoItem, setCurrent }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodo = () => {
  const context = useContext(TodoContext);
  return context;
};
