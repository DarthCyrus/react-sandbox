import React from "react";
import { v4 as uuid } from "uuid";
import { useState } from "react";

function TodoForm(props) {
  const [inputValue, setInputValue] = useState("");

  const manageOnSubmit = (event) => {
    event.preventDefault();
    const todo = {
      text: inputValue,
      id: uuid(),
      isComplete: false
    };
    props.onSubmit(todo);
    setInputValue("");
  };
  return (
    <form onSubmit={manageOnSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(ev) => setInputValue(ev.target.value)}
        required
        minLength={3}
        placeholder="Add a Todo"
      />
      <button type="submit">Add Todo</button>
    </form>
  );
}

export default TodoForm;
