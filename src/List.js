import React, { useContext } from "react";
import Item from "./Item";
import { TodoContext } from "./TodoStore";

const List = () => {
  const { todos, loading, changeTodoStatus } = useContext(TodoContext);
  const todosList = todos.map(todo => (
    <Item key={todo.id} todo={todo} changeTodoStatus={changeTodoStatus} />
  ));
  return <ul>{loading ? "loading..." : todosList}</ul>;
};

export default List;
