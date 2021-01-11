// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react";
import Todo from "./Todo";

class TodoList extends React.Component {
  render() {
    const todoArr = this.props.list.map((item) => {
      return <Todo taskClickHandler={this.props.taskClickHandler} key={item.id} item={item}/>
    });

    return (
      <div>
        <h3>hi from todoList.js</h3>
        {todoArr}
      </div>
    );
  }
}

export default TodoList;
