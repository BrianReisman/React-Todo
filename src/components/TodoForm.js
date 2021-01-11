import React, { useState } from "react";
import { useLayoutEffect } from "react";

const TodoForm = (props) => {
  const [input, setInput] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      task: input,
      id: Date.now(),
      completed: false,
    };
    props.addItem(newItem)

    setInput('')
  };

  const onChange = (e) => {
    setInput(e.target.value);
  };

  const onClear = e => {
    e.preventDefault();
    if(input){
      setInput('')
    }
    props.clearCompletedHandler(); //no argument needed, do the thing you do.
  }

  return (
    <form onSubmit={onSubmit}>
      <input type="text" value={input} onChange={onChange} />
      <button onClick={onSubmit}>Add Todo</button>
      <button onClick={onClear}>Clear Completed</button>
    </form>
  );
};

export default TodoForm;
