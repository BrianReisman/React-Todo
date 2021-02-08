import React from "react";

const TodoForm = (props) => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        todo Form:
        <input
          type="text"
          value={props.formValue}
          onChange={props.formChangeHandler}
        />        <button>Add Todo</button>
      </form>
      <button onClick={props.handleClearCompleted}>Clear Completed</button>
    </div>
  );
};

export default TodoForm;
