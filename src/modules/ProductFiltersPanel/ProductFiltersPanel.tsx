import {
  useCategories,
  useGetCategories,
  useMaxPrice,
} from "pages/HomePage/store/product/products.store";
import { useEffect, useState } from "react";
import { Button } from "UI/Button/Button";
import { DropDownList } from "UI/DropDownList/DropDownList";
import { Input } from "UI/Input/Input";
import { PriceRange } from "UI/PriceRange/PriceRange";

export const ProductFiltersPanel = () => {
  const [value, setValue] = useState<number>(0);
  const [isActive, setIsActive] = useState<boolean>(true);
  const getCategory = useGetCategories();
  const category = useCategories();
  const maxPrice = +useMaxPrice().toFixed(0);
  useEffect(() => {
    getCategory();
  }, [getCategory]);
  return (
    <div className="w-[20%] h-[85%] border rounded-2xl ml-[4%] ">
      <h2 className="text-xl font-medium pl-5 pt-4">Product Filters</h2>
      <Input mode="search" name="text" placeholder="Search" type="text" />
      <PriceRange
        name="priceRange"
        max={maxPrice}
        min={0}
        value={value}
        setValue={setValue}
      />
      <DropDownList
        isActive={isActive}
        setIsActive={setIsActive}
        category={category}
      />
      <div className="mb-5">
        <Button classname="ml-5 mt-5 mr-10 bg-gray-100">Rest Filters</Button>
        <Button classname="bg-second-color text-white">Apply Filters</Button>
      </div>
    </div>
  );
};
