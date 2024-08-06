import iconCross from "../assets/images/icon-cross.svg";

/* eslint-disable react/prop-types */
import { useState } from "react";
import Checkbox from "./Checkbox";

const Todo = ({ todo, todoId, setTodos, todos, dark }) => {
  const [isChecked, setIsChecked] = useState(false);

  function handleDelete(e) {
    console.log(e.target);
    console.log(todoId);

    setTodos(todos.filter((todo) => todo.id != todoId));
  }
  return (
    <div
      className={`w-full ${
        dark ? "bg-slate-700" : "bg-white"
      } h-[60px] dark:border-black border shadow-md relative flex items-center justify-between pl-12 dark:text-white`}
    >
      <Checkbox todo={todo} isChecked={isChecked} setIsChecked={setIsChecked} />
      <div className="flex justify-between w-full pr-6">
        <p
          className={`${isChecked ? "line-through" : null} ${
            dark ? "text-white" : "text-gray-800"
          }`}
        >
          {todo.task}
        </p>
        <img
          onClick={handleDelete}
          className="cursor-pointer h-4 "
          src={iconCross}
          alt=""
        />
      </div>
    </div>
  );
};

export default Todo;
