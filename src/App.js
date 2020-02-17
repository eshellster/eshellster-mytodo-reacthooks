import React, { useState, useEffect } from "react";
import "./App.css";
import List from "./List";
import useFetch from "./useFetch";

const App = () => {
  const [newTodo, setNewTodo] = useState();

  const [todos, setTodos] = useState([]);
  const loading = useFetch(setTodos, "http://localhost:8080/todo");

  const changeInputData = e => {
    setNewTodo(e.target.value);
  };

  const addTodo = e => {
    e.preventDefault();
    setTodos([
      ...todos,
      { id: todos.length + 1, title: newTodo, status: "todo" }
    ]);
  };

  useEffect(() => {
    console.log("새로운 내용이 랜더링 됐네요", todos);
  }, [todos]);

  return (
    <div className="App">
      <h1>todo 애플리케이션</h1>

      <form action="">
        <input type="text" name="" onChange={changeInputData} />
        <button onClick={addTodo}>할일추가</button>
      </form>
      <List todos={todos} loading={loading} />
    </div>
  );
};

export default App;
