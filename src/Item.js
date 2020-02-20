import React, { useContext } from "react";
import "./Item.css";
import { TodoContext } from "./TodoStore";

const Item = ({ todo }) => {
  const { changeTodoStatus } = useContext(TodoContext);
  const toggleItem = e => {
    const id = e.target.dataset.id;
    changeTodoStatus(id);
  };

  const itemClassName = todo.status === "done" ? "done" : "";
  return (
    <li data-id={todo.id} onClick={toggleItem} className={itemClassName}>
      {todo.title}
    </li>
  );
};

export default Item;
