import React, { useState } from "react";

const TodoForm = (props) => {
  const [input, setInput] = useState("");
  console.log(props);

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

  return (
    <form onSubmit={onSubmit}>
      <input type="text" value={input} onChange={onChange} />
      <button>Add Todo</button>
      <button>Clear Completed</button>
    </form>
  );
};

export default TodoForm;
