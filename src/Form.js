import React, { useContext } from "react";
import { TodoContext } from "./TodoStore";

export default () => {
  const { addTodo, changeInputData } = useContext(TodoContext);
  return (
    <form action="">
      <input type="text" name="" onChange={changeInputData} />
      <button onClick={addTodo}>할일추가</button>
    </form>
  );
};
