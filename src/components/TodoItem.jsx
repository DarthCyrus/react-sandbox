import React from "react";

const TodoItem = ({ todo, handleDoubleClick, toggleCompleted }) => {
  return (
    <li
      key={todo.id}
      onDoubleClick={() => handleDoubleClick(todo.id)}
      onClick={() => toggleCompleted(todo.id)}
      className={todo.isComplete ? "completed" : ""}
    >
      {todo.title}
    </li>
  )

}

export default TodoItem;