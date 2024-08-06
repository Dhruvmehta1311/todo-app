import { useState } from "react";
import lightdesktop from "./assets/images/bg-desktop-light.jpg";
import lightmobile from "./assets/images/bg-mobile-light.jpg";
import moon from "./assets/images/icon-moon.svg";

import Checkbox from "./components/Checkbox";
import Todo from "./components/Todo";
function App() {
  return (
    <div>
      <Header />
    </div>
  );
}

function Header() {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([
    { id: 1, task: "Complete JavaScript course" },
    // { id: 2, task: "Write blog post about React" },
    // { id: 3, task: "Grocery shopping" },
    // { id: 4, task: "Schedule dentist appointment" },
    // { id: 5, task: "Read a chapter of 'Clean Code'" },
  ]);

  function todoInput(e) {
    setNewTodo(e.target.value);
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    if (!newTodo.trim()) return;

    const newTodoItem = {
      id: todos.length + 1,
      task: newTodo,
    };

    console.log(newTodoItem);

    setTodos([...todos, newTodoItem]);
    setNewTodo("");
  }

  return (
    <div className="font-josefin relative pt-16 sm:pt-20">
      <div className="absolute w-full -z-10 top-0 left-0">
        <img className="w-full hidden md:block" src={lightdesktop} alt="" />
        <img className="w-full md:hidden" src={lightmobile} alt="" />
      </div>
      <main className="flex flex-col gap-4 max-w-[500px] w-[90%] mx-auto ">
        <div className="flex w-full justify-between items-center">
          <h2 className="text-white text-3xl sm:text-4xl font-bold">
            TODO APP
          </h2>
          <img className="h-8" src={moon} alt="" />
        </div>

        <form onSubmit={handleFormSubmit} className="flex flex-col gap-6">
          <div className="relative">
            <input
              value={newTodo}
              onChange={todoInput}
              className="w-full h-[50px] pl-14 rounded-md outline-none"
              type="text"
              placeholder="Create a New Todo"
            />

            <Checkbox />
          </div>

          {/* Todos */}
          <section className=" w-full  rounded-md overflow-hidden ">
            {/* Single Todo */}

            {todos.map((todo) => (
              <Todo todo={todo} key={todo.id} />
            ))}

            {/* footer */}
            <div className="w-full bg-white border min-h-[50px] flex items-center justify-between px-2 text-gray-400 ">
              <p>{todos.length} items left</p>
              <div className="flex gap-2">
                <p className="cursor-pointer">All</p>
                <p className="cursor-pointer">Active</p>
                <p className="cursor-pointer">Completed</p>
              </div>
              <p className="text-center">Clear Completed</p>
            </div>
          </section>
        </form>
      </main>
    </div>
  );
}

export default App;
