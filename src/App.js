import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <Todo />
    </div>
  );
}


class Todo extends React.Component{
  constructor() {
  super();
  }
  render(){
    return(
      <div>
        <h1>Todo List</h1>
        <input type="text" placeholder="You task here"></input>&nbsp;
        <input type="date"></input>&nbsp;
        <button>Add task</button>
      </div>
    );
  }
}



export default App;