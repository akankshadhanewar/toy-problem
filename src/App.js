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
  constructor(props) {
  super(props);
    this.state={
      tasklist:[],
      text:"",
      date:""
    };
    this.addTask = this.addTask.bind(this);
  }

  addTask(){
    var name = this.state.text
    console.log(name)
    if(name.length === 0){
      alert("Task feild cannot be empty")
    }
    var date = this.state.date
    console.log(date)
    if(date.length === 0){
      alert("Date feild canot be empty")
    }
    var dict={}
    dict["name"]=name;
    dict["date"]=date;
    this.setState({
      tasklist:[...this.state.tasklist,dict]
    });
  }
  
  render(){
    return(
      <div>
        <h1>Todo List</h1>
        <input type="text" placeholder="Enter your task"></input>&nbsp;
        <input type="date"></input>&nbsp;
        <button onClick={this.addTask}>Add task</button>
      </div>
    );
  }
}

export default App;