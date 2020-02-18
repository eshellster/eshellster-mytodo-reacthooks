import React from "react";

export default ({ addTodo, changeInputData }) => {
  return (
    <form action="">
      <input type="text" name="" onChange={changeInputData} />
      <button onClick={addTodo}>할일추가</button>
    </form>
  );
};
