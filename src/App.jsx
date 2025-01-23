import "./App.css";
import React from "react";
import Todo from "./components/Todo";

function App() {
  return (
    <>
      <div className="container">
        <h1 className="head">To-Do List</h1>
        <Todo />
      </div>
    </>
  );
}

export default App;
