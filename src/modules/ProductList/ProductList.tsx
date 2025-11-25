import type { Product } from "constant/basicType";
import type { FC } from "react";
import { Card } from "UI/Card/Card";

interface Props {
  title: string;
  products: Product[];
  isLoading: boolean;
}

export const ProductList: FC<Props> = ({ title, products, isLoading }) => {
  return (
    <>
      <h2 className="uppercase text-2xl font-bold p-5">{title}</h2>
      {isLoading ? (
        <div>loading...</div>
      ) : (
        <div className="grid grid-cols-3 ">
          {products.map((item) => (
            <Card
              description={item.description}
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
