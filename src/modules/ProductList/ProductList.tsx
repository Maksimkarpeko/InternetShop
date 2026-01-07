import type { Product } from "constant/basicType";
import { useAddProduct } from "pages/HomePage";

import {  type FC } from "react";
import { Card } from "UI/Card/Card";

interface Props {
  title: string;
  products: Product[];
  isLoading: boolean;
}

export const ProductList: FC<Props> = ({ title, products, isLoading }) => {
  const addToBucket = useAddProduct();
  return (
    <>
      <h2 className="uppercase text-3xl font-bold p-5 pl-25">{title}</h2>
      {isLoading ? (
        <div>loading...</div>
      ) : (
        <div className="w-[85%] ml-[10%] grid grid-cols-3 gap-10 ">
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
