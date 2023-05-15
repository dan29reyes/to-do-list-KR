import "../styles/App.css";
import React, { Component } from "react";
// import Task from "./task-list";
import AddToDo from "./AddToDo";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Reminders App</h1>
          <AddToDo className="app-body"></AddToDo>
        </header>
      </div>
    );
  }
}

export default App;
