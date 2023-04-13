import { useState, useRef } from "react";
import "./index.css";

const Input = ({ todolist, setTodolist }) => {
  const todoRef = useRef();

  const addItem = () => {
    let input = todoRef.current.value;
    if (input === "") {
      console.log("값 없다");
      return;
    }
    let newTodolist = [...todolist];
    newTodolist.push({
      todo: input,
      complete: false,
    });
    setTodolist(newTodolist);
  };
  return (
    <div className="input_wrapper">
      <input
        className="input_box"
        type="text"
        ref={todoRef}
        placeholder="What do you have to do?"
      />
      <button className="add_button" onClick={addItem}>
        ADD
      </button>
    </div>
  );
};

export default Input;
