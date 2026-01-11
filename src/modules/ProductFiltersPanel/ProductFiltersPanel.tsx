import { Input } from "UI/Input/Input";
import { PriceRange } from "UI/PriceRange/PriceRange";

export const ProductFiltersPanel = () => {
  return (
    <div className="w-[20%] border rounded-2xl ml-[4%] ">
      <h2 className="text-xl font-medium pl-5 pt-4">Product Filters</h2>
      <Input mode="search" name="text" placeholder="Search" type="text" />       
      <PriceRange name="priceRange" max={100} min={0} />
    </div>
  );
};
