import type { Product } from "constant/basicType";
import { useAddProduct } from "pages/HomePage";

import {  type FC } from "react";
import { Card } from "UI/Card/Card";

interface Props {
  products: Product[];
  isLoading: boolean;
}

export const ProductList: FC<Props> = ({ products, isLoading }) => {
  const addToBucket = useAddProduct();
  return (
    <>
      {isLoading ? (
        <div>loading...</div>
      ) : (
        <div className="w-[70%]  grid grid-cols-3 gap-4 ">
          {products.map((item, index) => (
            <Card
              key={index}
              image={`${item.images}`}
              price={item.price}
              rating={item.rating}
              title={item.title}
              onAdd={(count: number) => {
                if (addToBucket(item,count))  {
                  console.log("Item travel to bucket");
                } else {
                  console.log("Item no travel to bucket");
                }
              }}
            />
          ))}
        </div>
      )}
    </>
  );
};
