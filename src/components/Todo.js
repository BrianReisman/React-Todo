import React from 'react';


const Todo = props => {
  const clickHandler = e => {
    props.taskClickHandler(props.item.id) //! Originally I used e.target.id.... WHICH I got by givein the element below an ID.... from props.item.id
  }

  return(
    <div onClick={clickHandler} id={props.item.id} className={`item${props.item.completed?'done':''}`}>{props.item.task}</div>
  )
}

export default Todo;