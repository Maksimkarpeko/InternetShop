import basket from "assets/basket.svg";
import { useSelectProduct } from "pages/HomePage";
import { Button } from "UI/Button/Button";
import { calculateTotalPrice } from "../../utils/calculateTotalPrice";
import { useNavigate } from "react-router-dom";
import { LINKS } from "config/links.config";
export const Header = () => {
  const navigate = useNavigate();
  const product = useSelectProduct();
  return (
    <header className="flex flex-wrap justify-around bg-teal-900 h-21 ">
      <div className="mt-2">
        <h1
          className="text-5xl text-white font-bold cursor-pointer"
          onClick={() => navigate(LINKS.mainPage)}
        >
          General Store
        </h1>
      </div>
      <div className="w-[15%] mt-5">
        <Button
          className="w-full h-11 bg-second-color pr-3 rounded-xl text-white text-xl font-bold cursor-pointer flex justify-center   shadow-md transform active:scale-[0.95] duration-300"
          type="button"
          onClick={() => navigate(LINKS.ordersPage)}
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
