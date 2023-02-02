import React from "react";
// DON'T DO THAT
// use JS instead
// import { v4 as uuid } from "uuid";
import { useState } from "react";

function TodoForm(props) {
  const [inputValue, setInputValue] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    const todo = {
      title: inputValue,
      isComplete: false,
      userId: 1
    };
    props.onSubmit(todo);
    setInputValue("");
  };
  return (
    <form onSubmit={onSubmit}>
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
