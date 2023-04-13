import "./index.css";
import { useState } from "react";
import Input from "../../components/Input";
import TodoItem from "../../components/TodoItem";

const MainPage = () => {
  const [todolist, setTodolist] = useState([]);

  return (
    <div className="main_container">
      <div className="todoList_container">
        <Input todolist={todolist} setTodolist={setTodolist} />
        <TodoItem todolist={todolist} />
      </div>
    </div>
  );
};

export default MainPage;
