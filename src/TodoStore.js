import React, { useState, useEffect, createContext } from "react";
import useFetch from "./useFetch";

export const TodoContext = createContext();

const TodoStore = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const loading = useFetch(setTodos, "http://localhost:8080/todo");

  const addTodo = newTodoTitle => {
    setTodos([
      ...todos,
      { id: todos.length + 1, title: newTodoTitle, status: "todo" }
    ]);
  };

  const changeTodoStatus = id => {
    const updateTodos = todos.map(todo => {
      if (todo.id === +id) {
        if (todo.status === "done") todo.status = "todo";
        else todo.status = "done";
      }
      return todo;
    });
    setTodos(updateTodos);
  };

  useEffect(() => {
    console.log("새로운 내용이 랜더링 됐네요", todos);
  }, [todos]);

  return (
    <TodoContext.Provider value={{ todos, addTodo, loading, changeTodoStatus }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoStore;
