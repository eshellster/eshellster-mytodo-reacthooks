import React from "react";
import "./TodoStore.css";
import List from "./List";
import Header from "./header";
import Form from "./Form";
import TodoContext from "./TodoStore";

const App = () => {
  return (
    <TodoContext>
      <div className="App">
        <Header />
        <Form />
        <List />
      </div>
    </TodoContext>
  );
};

export default App;
