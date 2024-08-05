import lightdesktop from "./assets/images/bg-desktop-light.jpg";
import lightmobile from "./assets/images/bg-mobile-light.jpg";
import moon from "./assets/images/icon-moon.svg";

import { useState } from "react";
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
  const [isChecked, setIsChecked] = useState(false);

  function toggleCheck() {
    setIsChecked((isChecked) => !isChecked);
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

        <form className="flex flex-col gap-6">
          <div className="relative">
            <input
              className="w-full h-[50px] pl-14 rounded-md outline-none"
              type="text"
              placeholder="Create a New Todo"
            />

            <Checkbox toggleCheck={toggleCheck} isChecked={isChecked} />
          </div>

          {/* Todos */}
          <section className=" w-full  rounded-md overflow-hidden ">
            {/* Single Todo */}

            <Todo />
            <Todo />
            <Todo />
            <Todo />
          </section>
        </form>
      </main>
    </div>
  );
}

export default App;
