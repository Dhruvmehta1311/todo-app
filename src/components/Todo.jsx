/* eslint-disable react/prop-types */
import { useState } from "react";
import Checkbox from "./Checkbox";

const Todo = ({ todo }) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div className="w-full bg-white h-[50px] border shadow-md  relative flex items-center px-12">
      <Checkbox todo={todo} isChecked={isChecked} setIsChecked={setIsChecked} />
      <p className={`${isChecked ? "line-through" : null}`}>{todo.task}</p>
    </div>
  );
};

export default Todo;
