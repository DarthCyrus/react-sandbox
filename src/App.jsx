import React, { useState, useEffect } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import { useTodos } from "./hooks";

function App() {
  const [todos, setTodos] = useState([]);
  const { getTodos, addTodo, updateTodo, removeTodo } = useTodos();

  const onFormSubmit = (todo) => {
    addTodo(todo).then(() => {
      getTodos().then(setTodos)
    })
  }

  const removeTodoHandler = (id) => {
    console.log("test");
    removeTodo(id).then(() => getTodos().then(setTodos))
  };

  const toggleCompleted = (id) => {
    const state = todos.find((todo) => todo.id === id);
    state.isComplete = !state.isComplete;
    updateTodo(id, state).then(() => getTodos().then(setTodos))
  };

  useEffect(() => {
    getTodos().then(setTodos)
  }, [getTodos])

  return (
    <>
      <h1>Todo-App</h1>
      <div id="wrapper">
        <TodoForm onSubmit={onFormSubmit} />
        <TodoList
          todos={todos}
          handleDoubleClick={removeTodoHandler}
          toggleCompleted={toggleCompleted}
        />
      </div>
    </>
  );
}

export default App;
