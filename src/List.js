import React, { useContext } from "react";
import Item from "./Item";
import { TodoContext } from "./TodoStore";

const List = () => {
  const { todos, loading } = useContext(TodoContext);
  const todosList = todos.map(todo => <Item key={todo.id} todo={todo} />);
  return <ul>{loading ? "loading..." : todosList}</ul>;
};

export default List;
