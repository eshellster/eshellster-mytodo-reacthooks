import React from "react";
import "./Header.css";
const header = ({ todos }) => {
  return (
    <div>
      <h1>Hello Todo 애플리케이션</h1>
      <div className="countInfo">
        해야할일 {todos.filter(v => v.status === "todo").length}개가 있습니다.
      </div>
    </div>
  );
};

export default header;
