import lightdesktop from "./assets/images/bg-desktop-light.jpg";
import lightmobile from "./assets/images/bg-mobile-light.jpg";
import moon from "./assets/images/icon-moon.svg";
import iconCheck from "./assets/images/icon-check.svg";
import { useState } from "react";

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
        <img className="w-full hidden sm:block" src={lightdesktop} alt="" />
        <img className="w-full sm:hidden" src={lightmobile} alt="" />
      </div>
      <main className="flex flex-col gap-4 max-w-[500px] w-[90%] mx-auto ">
        <div className="flex w-full justify-between items-center">
          <h2 className="text-white text-3xl sm:text-4xl font-bold">
            TODO APP
          </h2>
          <img className="h-8" src={moon} alt="" />
        </div>

        <form>
          <div className="relative">
            <input
              className="w-full h-[40px] pl-14 rounded-md outline-none"
              type="text"
              placeholder="Create a New Todo"
            />

            <div
              className={`absolute top-1.5 left-2.5 flex items-center justify-center w-6 h-6 rounded-full cursor-pointer ${
                isChecked
                  ? "bg-gradient-to-r from-[hsl(192,100%,67%)] to-[hsl(280,87%,65%)]"
                  : "border border-gray-300"
              }`}
              onClick={toggleCheck}
            >
              {isChecked && (
                <img src={iconCheck} className="w-3 h-3" alt="Check Icon" />
              )}
            </div>
          </div>
        </form>
      </main>
    </div>
  );
}

export default App;
