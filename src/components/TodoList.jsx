import React from "react";

function TodoList({ todos, handleDoubleClick, toggleCompleted }) {
  return (
    <ul>
      {todos.map((todo) => (
        <li
          key={todo.id}
          onDoubleClick={() => handleDoubleClick(todo.id)}
          onClick={() => toggleCompleted(todo.id)}
          className={todo.isComplete ? "complete" : ""}
        >
          {todo.text}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
