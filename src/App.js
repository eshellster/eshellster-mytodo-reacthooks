import React, { useState } from "react";
import "./App.css";
import List from "./List";

function App() {
  const [newTodo, setNewTodo] = useState();
  const [todos, setTodos] = useState(["js공부", "운동"]);

  const changeInputData = e => {
    setNewTodo(e.target.value);
  };

  const addTodo = e => {
    e.preventDefault();
    setTodos([...todos, newTodo]);
  };
  return (
    <div className="App">
      <h1>todo 애플리케이션</h1>

      <form action="">
        <input type="text" name="" onChange={changeInputData} />
        <button onClick={addTodo}>할일추가</button>
      </form>
      <List todos={todos} />
    </div>
  );
}

export default App;
