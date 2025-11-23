import basket from "assets/basket.svg";
import search from "assets/search.png";
export const Header = () => {
  return (
    <header className="flex flex-wrap justify-around bg-bg h-21 ">
      <div className="mt-2">
        <h1 className="text-5xl text-second-color font-bold">General Store</h1>
      </div>
      <div className="mt-4 relative">
        <img src={search} alt="search" className="absolute top-3 left-2" />
        <input
          type="text"
          name="text"
          className="outline-none bg-second-color text-gray-100 text-2xl rounded-xl p-1 pl-8.5 h-12"
        />
      </div>
      <div className="w-[11%] mt-5">
        <button
          className=" w-full h-11 bg-second-color pr-3 rounded-xl text-white text-xl font-bold cursor-pointer flex justify-center   shadow-md transform active:scale-[0.95] duration-300"
          type="button"
        >
          <div className="pr-4 border-r border-r-white/50 h-7 mt-1.5">
            520 $
          </div>
          <div className="w-10 flex pl-3 ">
            <img src={basket} alt="basket" width={"25px"} className="" />
            <span className="pt-1.5 pl-2">3</span>
          </div>
        </button>
      </div>
    </header>
  );
};
