import { useState } from "react";
import "./index.css";
const TodoItem = ({ todolist }) => {
  // editItem = () => {};

  // completeItem = () => {};

  // removeItem = () => {};

  return (
    <div className="todo_item_container">
      {todolist ? (
        todolist.map((item, index) => (
          <div className="todo_item_wrapper" key={index}>
            <p className="todo_item">{item.todo}</p>
          </div>
        ))
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default TodoItem;
