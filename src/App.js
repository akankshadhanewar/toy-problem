import React from 'react';
import './App.css';

function App() {
  return (
    <div className = "App">
      <Todo/>
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
    this.displayText=this.displayText.bind(this);
    this.displayDate=this.displayDate.bind(this);
    this.deleteTask=this.deleteTask.bind(this);
  }

  addTask(){
    var n = this.state.text
    console.log(n)
    if(n.length === 0){
      alert("Task feild cannot be empty")
    }
    var d = this.state.date
    console.log(d)
    if(d.length === 0){
      alert("Date feild canot be empty")
    }
    var dict={}
    dict["name"]=n;
    dict["date"]=d;
    this.setState({
      tasklist:[...this.state.tasklist,dict]
    });
  }

  displayDate(date_val){
    var value_d = date_val.target.value;
    this.setState({
      date:value_d
    });
  }

  displayText(task_val){
    var value_t = task_val.target.value;
    this.setState({
      text:value_t
    });
  }
  
  deleteTask(task){
    var newList = [...this.state.tasklist];
    var task_n = task.target.id;
    var index;
    for(let i = 0; i<newList.length; i++){
      if(newList[i].name === task_n){
        index = i;
      }
      else{
        index = -1;
      }
      newList.splice(index,1);
      this.setState({
        tasklist:[...newList]
      })
    }
  }

  render(){
    return(
      <div className="App-header">
        <h1>Todo List</h1>
        <input type="text" placeholder="Enter your task" onChange={this.displayText}></input>&nbsp;
        <input type="date" onChange={this.displayDate}></input>&nbsp;
        <button onClick={this.addTask}>Add task</button>
        <ul>
          {this.state.tasklist.map((value) => {
            return(
              <div id = {value["name"]}>
              {value["name"]+" "+value["date"]}&nbsp;
              <button onClick={this.deleteTask}>Delete</button>&nbsp;
              <button>Mark</button>
              </div>);
          })}
        </ul>
      </div>
    );
  }
}

export default App;