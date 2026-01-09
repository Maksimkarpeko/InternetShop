// import { useCounter } from "hooks/useCounter";
import { useCounter } from "hooks/useCounter";
import { useAddProduct, type SelectProduct } from "pages/HomePage";
import { useDeleteProduct } from "pages/HomePage/store/product/products.store";
import type { FC } from "react";
import { Button } from "UI/Button/Button";
import { Counter } from "UI/Counter/Counter";
import { StarRating } from "UI/StarRating/StarRating";
import { calculatePrice } from "utils/calculateTotalPrice";

interface ShoppingCartProps {
  item: SelectProduct;
}
export const ShoppingCart: FC<ShoppingCartProps> = ({ item }) => {
  const { counter, onDecrease, onIncrease, setCounter } = useCounter();
  const addBucket = useAddProduct();
  const deleteProduct = useDeleteProduct();
  return (
    <div
      key={item.selectProduct.id}
      className="ml-[18%] flex w-[65%]
      mt-5
      rounded-3xl
      border border-gray-900/40"
    >
      <div className="w-[45%]">
        <img
          src={`${item.selectProduct.images}`}
          alt={`${item.selectProduct.title}`}
          width={"100%"}
        />
      </div>
      <div>
        <h2 className="pt-5 text-xl font-semibold text-gray-800 mb-2">
          {item.selectProduct.title}
        </h2>
        <div className="flex">
          <StarRating rating={item.selectProduct.rating} />
          <p className="py-1 px-3 text-gray-400">{item.countSelect}</p>
        </div>
        <hr className="mt-5 mb-7 border-gray-400/30" />
        <div className="flex gap-10">
          <div>
            <Counter
              counter={counter}
              onDecrease={onDecrease}
              onIncrease={onIncrease}
              classname="mb-3"
            />
            <p className="text-2xl font-bold text-gray-900 ">
              {calculatePrice(
                item.countSelect,
                item.selectProduct.price
              )}
              $
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <Button classname="text-white  bg-second-color "
            onClick={() => {
              if (deleteProduct(item.selectProduct,counter)){
                console.log("Product delete");
                setCounter(0)
              }
            }}
            >Delete</Button>
            <Button
              classname="text-white bg-second-color"
              onClick={() => {
                if (addBucket(item.selectProduct, counter)) {
                  console.log("Add to bucket");
                  setCounter(0);
                } else {
                  console.log("Delete to bucket");
                }
              }}
            >
              Add quantities
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
