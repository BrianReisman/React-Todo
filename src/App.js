import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './components/Todo.css';

const startingList = [
  {
    task: 'Kombucha',
    id: 1528817077281,
    completed: false
  },
  {
    task: 'Plantain Chips',
    id: 1528817084352,
    completed: false
  },
  {
    task: 'Paleo Puffs',
    id: 1528817064353,
    completed: false
  },
]

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      list: startingList //this is an Arr
    }
  }

  //Handlers
  taskClickHandler = (clickedId) => {
    this.setState({
      list: this.state.list.map(item => {
          if(item.id === clickedId){
            console.log('something!')
            return {
              //// ...item, completed: true
              //"the item as it was, BUT the completed property is going to be set to NOT what the item (as it was) was. The oposite"
              ...item, completed: !item.completed
            }
          }
          return item;
        })
    })
  }
  
  addItemHandler = (newItem) => {
    console.log(newItem)

    this.setState({list:[...this.state.list, newItem]})

    //*Belows works too
    // const newList = ([...this.state.list, newItem])
    // this.setState({list: newList})
  }
  
  
  render() {
    console.log(this.state.list)
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList list={this.state.list} taskClickHandler={this.taskClickHandler}/>
        <TodoForm addItem={this.addItemHandler}/>
      </div>
    );
  }
}

export default App;
