import React, { useEffect, useRef } from "react";
import { useTodo } from "../context/todoContext";
import "../styles/TodoInput.css";

export default function TodoInput() {
  const { AddTodoItem, EditTodoItem, current } = useTodo();
  const inputRef = useRef();

  const todoButtonClick = () => {
    if (inputRef.current.value !== "") {
      if (current === null) AddTodoItem(inputRef.current.value);
      else EditTodoItem(current.id, inputRef.current.value);
      inputRef.current.value = "";
    }
  };
  const onSubmit = (e) => {
    e.preventDefault();
    todoButtonClick();
  };

  useEffect(() => {
    if (current !== null) {
      inputRef.current.value = current.value;
    }
  }, [current]);

  return (
    <form className="todo-input-container" onSubmit={onSubmit}>
      <div>
        <input
          required
          placeholder="Digite um item"
          className="todo-input"
          ref={inputRef}
          onKeyDown={(e) => (e.which === 13 ? todoButtonClick() : null)}
        />
      </div>
      <div>
        <button className="todo-button" onClick={todoButtonClick}>
          {current === null ? "+" : "Salvar"}
        </button>
      </div>
    </form>
  );
}
