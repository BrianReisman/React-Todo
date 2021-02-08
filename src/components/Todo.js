import React from "react";
import './Todo.css';

const Todo = (props) => {
  // console.log(props.todoData)

  const className = props.todoData.completed ?'done' : null
  return (
    <div onClick={props.toggleHandler}>
      <p className={className} id={props.todoData.id}>{props.todoData.task}</p>
    </div>
  );
};

export default Todo;
