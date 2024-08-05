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
    <div className="font-josefin relative p-20">
      <div className="absolute w-full -z-10 top-0 left-0">
        <img className="w-full hidden sm:block" src={lightdesktop} alt="" />
        <img className="w-full sm:hidden" src={lightmobile} alt="" />
      </div>
      <main className="p-4 border max-w-[500px] w-[90%] mx-auto flex flex-col gap-4">
        <div className="flex w-full justify-between">
          <h2 className="text-white text-4xl font-bold">TODO APP</h2>
          <img className="h-8" src={moon} alt="" />
        </div>

        <form>
          <div className="relative">
            <input
              className="w-full h-[40px] pl-14 rounded-md outline-none"
              type="text"
              placeholder="Create a New Todo"
            />

            <input
              className="absolute top-2.5 left-2.5 w-radio h-radio "
              type="checkbox"
            />
          </div>
        </form>
      </main>
    </div>
  );
}

export default App;
