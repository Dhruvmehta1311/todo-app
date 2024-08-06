/* eslint-disable react/prop-types */
import { useState } from "react";
import lightdesktop from "./assets/images/bg-desktop-light.jpg";
import lightmobile from "./assets/images/bg-mobile-light.jpg";
import darkdesktop from "./assets/images/bg-desktop-dark.jpg";
import darkmobile from "./assets/images/bg-mobile-dark.jpg";
import moon from "./assets/images/icon-moon.svg";
import sun from "./assets/images/icon-sun.svg";

import Checkbox from "./components/Checkbox";
import Todo from "./components/Todo";
function App() {
  const [dark, setDark] = useState(true);
  function darkModeHandler() {
    setDark(!dark);
    document.body.classList.toggle("dark");
    console.log(dark);
  }

  return (
    <div>
      <Header dark={dark} darkModeHandler={darkModeHandler} />
    </div>
  );
}

function Header({ darkModeHandler, dark }) {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([
    { id: 1, task: "Complete JavaScript course" },
    { id: 2, task: "Write blog post about React" },
    { id: 3, task: "Grocery shopping" },
    { id: 4, task: "Schedule dentist appointment" },
    { id: 5, task: "Read a chapter of 'Clean Code'" },
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

  function handleClearAll() {
    setTodos([]);
  }

  return (
    <div className="font-josefin relative pt-16 sm:pt-20">
      <div className="absolute w-full -z-10 top-0 left-0">
        <img
          className="w-full hidden md:block"
          src={dark ? darkdesktop : lightdesktop}
          alt=""
        />
        <img
          className="w-full md:hidden"
          src={dark ? darkmobile : lightmobile}
          alt=""
        />
        <div
          className={`min-h-screen ${dark ? "bg-slate-800" : "bg-white"}`}
        ></div>
      </div>
      <main className="flex flex-col gap-4 max-w-[500px] w-[90%] mx-auto ">
        <div className="flex w-full justify-between items-center">
          <h2 className="text-white text-3xl sm:text-4xl font-bold">
            TODO APP
          </h2>
          <img
            onClick={darkModeHandler}
            className="h-8"
            src={dark ? sun : moon}
            alt=""
          />
          {/* <img className="h-8" src={sun} alt="" /> */}
        </div>

        <form onSubmit={handleFormSubmit} className="flex flex-col gap-6">
          <div className="relative">
            <input
              value={newTodo}
              onChange={todoInput}
              className={`w-full h-[50px] pl-14 rounded-md outline-none ${
                dark ? "bg-slate-700 text-white" : "bg-white"
              }`}
              type="text"
              placeholder="Create a New Todo"
            />

            <Checkbox />
          </div>

          {/* Todos */}
          <section className=" w-full  rounded-md overflow-hidden ">
            {/* Single Todo */}

            {todos.map((todo) => (
              <Todo
                setTodos={setTodos}
                todos={todos}
                todoId={todo.id}
                todo={todo}
                key={todo.id}
                dark={dark}
              />
            ))}

            {/* footer */}
            <div
              className={`w-full ${
                dark ? "bg-slate-700" : "bg-white"
              } border min-h-[50px] flex items-center justify-between px-2 text-gray-400 `}
            >
              <p>{todos.length} items left</p>
              <div className="flex gap-4 py-4">
                <p className="cursor-pointer">All</p>
                <p className="cursor-pointer">Active</p>
                <p className="cursor-pointer">Completed</p>
              </div>
              <p
                onClick={handleClearAll}
                className="text-center cursor-pointer"
              >
                Clear All
              </p>
            </div>
          </section>
        </form>
      </main>
    </div>
  );
}

export default App;
