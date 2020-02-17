import React, { useState, useEffect } from "react";
import "./App.css";
import List from "./List";

function App() {
  const [newTodo, setNewTodo] = useState();
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState();

  const changeInputData = e => {
    setNewTodo(e.target.value);
  };

  const addTodo = e => {
    e.preventDefault();
    setTodos([...todos, newTodo]);
  };

  const fetchInitialData = async () => {
    setLoading(true);
    const response = await fetch("http://localhost:8080/todo");
    const initialData = await response.json();
    setTodos(initialData);
    setLoading(false);
  };

  useEffect(() => {
    console.log("새로운 내용이 랜더링 됐네요", todos);
  }, [todos]);

  useEffect(() => {
    fetchInitialData();
  }, []);

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
}

export default App;
