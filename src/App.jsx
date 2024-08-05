import lightdesktop from "./assets/images/bg-desktop-light.jpg";
import lightmobile from "./assets/images/bg-mobile-light.jpg";
import moon from "./assets/images/icon-moon.svg";

function App() {
  return (
    <div>
      <Header />
    </div>
  );
}

function Header() {
  return (
    <div className="">
      <div className="">
        <img className="w-full hidden sm:block" src={lightdesktop} alt="" />
        <img className="w-full sm:hidden" src={lightmobile} alt="" />
      </div>
      <div className=" flex justify-between  p-4 items-center  max-w-[370px] sm:max-w-[570px] w-[90%] mx-auto relative z-10 sm:mt-[-200px] mt-[-150px] flex-col gap-6 sm:gap-10">
        <div className="flex items-center justify-between w-full">
          <p className="text-3xl sm:text-4xl text-white font-medium">T O D O</p>
          <img className="h-8 cursor-pointer" src={moon} alt="" />
        </div>
        <div className="w-full  relative">
          <input
            className="w-full h-[40px] text-center rounded-lg"
            type="text"
            placeholder="Create a New Todo"
          />
          <input
            className="absolute w-radio h-radio top-2.5 left-4 "
            type="radio"
            name=""
            id=""
          />
        </div>
      </div>
    </div>
  );
}

export default App;
