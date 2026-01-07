import basket from "assets/basket.svg";
import { Search } from "lucide-react";
import { useSelectProduct } from "pages/HomePage";
import { Button } from "UI/Button/Button";
import { calculateTotalPrice } from "../../utils/calculateTotalPrice";
export const Header = () => {
  const product = useSelectProduct();
  return (
    <header className="flex flex-wrap justify-around bg-teal-900 h-21 ">
      <div className="mt-2">
        <h1 className="text-5xl text-white font-bold">General Store</h1>
      </div>
      <div className="mt-4 relative">
        <Search className="absolute top-3 left-2" color="white" />
        <input
          type="text"
          name="text"
          className="outline-none bg-second-color text-gray-100 text-2xl rounded-xl p-1 pl-8.5 h-12"
        />
      </div>
      <div className="w-[17%] mt-5">
        <Button
          className="w-full h-11 bg-second-color pr-3 rounded-xl text-white text-xl font-bold cursor-pointer flex justify-center   shadow-md transform active:scale-[0.95] duration-300"
          type="button"
        >
          <div className="pr-4 border-r border-r-white/50 h-7 mt-1.5">
            {calculateTotalPrice(product)} $
          </div>
          <div className="w-10 flex pl-3 ">
            <img src={basket} alt="basket" width={"25px"} className="" />
            <span className="pt-1.5 pl-2">{product.length}</span>
          </div>
        </Button>
      </div>
    </header>
  );
};
