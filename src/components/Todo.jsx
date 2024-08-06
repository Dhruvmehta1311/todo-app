import iconCross from "../assets/images/icon-cross.svg";

/* eslint-disable react/prop-types */
import { useState } from "react";
import Checkbox from "./Checkbox";

const Todo = ({ todo, todoId, setTodos, todos }) => {
  const [isChecked, setIsChecked] = useState(false);

  function handleDelete(e) {
    console.log(e.target);
    console.log(todoId);

    setTodos(todos.filter((todo) => todo.id != todoId));
  }
  return (
    <div className="w-full bg-white h-[60px] border shadow-md  relative flex items-center justify-between px-12">
      <Checkbox todo={todo} isChecked={isChecked} setIsChecked={setIsChecked} />
      <p className={`${isChecked ? "line-through" : null}`}>{todo.task}</p>
      <img
        onClick={handleDelete}
        className="cursor-pointer h-4"
        src={iconCross}
        alt=""
      />
    </div>
  );
};

export default Todo;
