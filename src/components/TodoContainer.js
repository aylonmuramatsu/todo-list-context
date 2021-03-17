import React from "react";
import { useTodo } from "../context/todoContext";
import "../styles/TodoContainer.css";
import TodoItem from "./TodoItem";

export default function TodoContainer() {
  const { list } = useTodo();
  console.log(list)
  return (
    <ul className="todo-container">
      {list.sort((a,b) => b.order - a.order).map((i) => (
        <TodoItem key={i.id} value={i.value} id={i.id} />
      ))}
    </ul>
  );
}
