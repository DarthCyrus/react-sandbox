import React, { useMemo } from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, handleDoubleClick, toggleCompleted }) {
  const todosRender = useMemo(() => todos.map((todo) => {
      return <TodoItem
              key={todo.id}
              todo={todo}
              handleDoubleClick={handleDoubleClick}
              toggleCompleted={toggleCompleted} />
    }), [todos, handleDoubleClick, toggleCompleted])
  
  return (
    <ul>{todosRender}</ul>
  );
}

export default TodoList;
