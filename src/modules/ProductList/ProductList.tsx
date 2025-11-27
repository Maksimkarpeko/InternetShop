import type { Product } from "constant/basicType";
import { type FC } from "react";
import { Card } from "UI/Card/Card";

interface Props {
  title: string;
  products: Product[];
  isLoading: boolean;
}

export const ProductList: FC<Props> = ({ title, products, isLoading }) => {
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
            />
          ))}
        </div>
      )}
    </>
  );
};
