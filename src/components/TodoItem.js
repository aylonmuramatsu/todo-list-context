import React from "react";
import { useTodo } from "../context/todoContext";
import "../styles/TodoItem.css";

export default function TodoItem({ id, value }) {
  const { DeleteTodoItem, setCurrent } = useTodo();
  const Edit = (item) => {
    setCurrent({ id: item.id, value: item.value });
  };
  return (
    <li className="todo-item">
      <div>{value}</div>
      <div>
        <button onClick={() => Edit({ id, value })}>Editar</button>&nbsp;
        <button onClick={() => DeleteTodoItem(id)}>X</button>
      </div>
    </li>
  );
}
