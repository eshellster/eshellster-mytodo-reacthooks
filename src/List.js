import React from "react";
import Item from "./Item";

const List = ({ todos, loading, changeTodoStatus }) => {
  const todosList = todos.map(todo => (
    <Item key={todo.id} todo={todo} changeTodoStatus={changeTodoStatus} />
  ));
  return <ul>{loading ? "loading..." : todosList}</ul>;
};

export default List;
