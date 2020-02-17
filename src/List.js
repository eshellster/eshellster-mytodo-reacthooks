import React from "react";

const List = ({ todos, loading }) => {
  const todosList = todos.map(todo => <li key={todo.id}>{todo.title}</li>);
  return <ul>{loading ? "loading..." : todosList}</ul>;
};

export default List;
