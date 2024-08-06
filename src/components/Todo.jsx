/* eslint-disable react/prop-types */
import { useState } from "react";
import Checkbox from "./Checkbox";

const Todo = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div className="w-full bg-white h-[50px] border shadow-md  relative flex items-center px-12">
      <Checkbox isChecked={isChecked} setIsChecked={setIsChecked} />
      <p>Lorem ipsum dolor sit.</p>
    </div>
  );
};

export default Todo;
