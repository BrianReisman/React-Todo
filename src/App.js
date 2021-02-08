import React from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

class App extends React.Component {
  state = {
    todos: [
      {
        task: "Finish LS work",
        id: 1528817077286,
        completed: false,
      },
      {
        task: "1hr of Udemy React",
        id: 1528817084358,
        completed: false,
      },
      {
        task: "Call with Lauren",
        id: 1528817884358,
        completed: false,
      },
      {
        task: "Plato Demo",
        id: 1578817084358,
        completed: false,
      },
    ],
    formValue: "",
  };

  formChangeHandler = (e) => {
    this.setState({ formValue: e.target.value });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      task: this.state.formValue,
      id: Date.now(),
      completed: false,
    };

    this.setState({ todos: this.state.todos.concat(newTask), formValue: '' }); //*.concat() returns a *new* array. Does not mutate, does not need to be wrapped in []
    // this.setState({ todos: [...this.state.todos, newTask]}); //*usning [] means you are creating a new array. Therefore you need to spread old state in to make a copy of its contents before following it up with your new addition.
  };

  toggleCompleteHandler = (e) => {
    // console.log(+e.target.id)
    // console.log(Number(e.target.id)) //*same!
    const filteredStateArr = this.state.todos.map(entry => {
      if(entry.id === +e.target.id){
        return {
          ...entry,
          completed: !entry.completed,
        }
      } else {
        return entry;
      }
    })
    this.setState({todos: filteredStateArr})
  }

  handleClearCompleted = () => {
    const filteredTodos = this.state.todos.filter(task => task.completed === false)
    this.setState({todos: filteredTodos})
    // console.log(filteredTodos)
  }

  render() {
    console.log(this.state.todos)
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm
          handleSubmit={this.handleFormSubmit}
          formValue={this.state.formValue}
          formChangeHandler={this.formChangeHandler}
          handleClearCompleted={this.handleClearCompleted}
        />
        <TodoList todos={this.state.todos} toggleHandler={this.toggleCompleteHandler}/>
      </div>
    );
  }
}

export default App;
