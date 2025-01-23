import { useState } from "react";
import React from "react";

function Todo() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim() !== "") {
      setTodos([...todos, input]);
      setInput("");
    }
  };

  const handleEditButton = (index) => {
    const newArray = todos.map((todo, i) => {
      if (i === index) {
        return prompt("Edit task", todo);
      }
      return todo;
    });
    setTodos(newArray);
  };

  const AddEditButton = ({ index }) => (
    <p onClick={() => handleEditButton(index)}>Edit</p>
  );

  const handleDeleteButton = (index) => {
    const newArray = todos.filter((todo, i) => i !== index);
    setTodos(newArray);
  };

  const AddDeleteButton = ({ index, handleDeleteButton }) => (
    <p onClick={() => handleDeleteButton(index)}>Delete</p>
  );

  const markDone = (index) => {
    const newArray = todos.map((todo, i) => {
      if (i === index) {
        return <strike>{todo}</strike>;
      }
      return todo;
    });
    setTodos(newArray);
  };

  const AddDoneButton = ({ index }) => (
    <p onClick={() => markDone(index)}>Done</p>
  );

  return (
    <div className="apps">
      <div className="input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new task"
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <h2>Tasks</h2>
      <div className="tasks">
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              <p>{todo}</p>
              <div className="buttons">
                <div className="edit">
                  <AddEditButton
                    index={index}
                    handleEditButton={handleDeleteButton}
                  />
                </div>

                <div className="delete">
                  <AddDeleteButton
                    index={index}
                    handleDeleteButton={handleDeleteButton}
                  />
                </div>

                <div className="done">
                  <AddDoneButton index={index} />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Todo;
