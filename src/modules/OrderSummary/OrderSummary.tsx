import type { SelectProduct } from "pages/HomePage";
import type { FC } from "react";
import { calculatePrice, calculateTotalPrice } from "utils/calculateTotalPrice";

interface OrderSummaryProps {
  products: SelectProduct[];
}

export const OrderSummary: FC<OrderSummaryProps> = ({ products }) => {
  return (
    <div className="mr-5">
      <ul className="flex flex-col gap-4">
        {products.map((product) => (
          <li
            key={product.selectProduct.id}
            className="flex justify-between items-center border-b border-green-200 pb-3"
          >
            <div>
              <p className="font-medium text-gray-800">
                {product.selectProduct.title}
              </p>
              <p className="text-sm text-gray-500">
                {product.countSelect} × {product.selectProduct.price}$
              </p>
            </div>

            <p className="font-semibold text-gray-900 mr-5">
              {calculatePrice(product.selectProduct.price, product.countSelect)}
              $
            </p>
          </li>
        ))}
      </ul>
      <div className="mt-6 flex justify-between items-center">
        <p className="text-lg font-semibold text-gray-700">Total</p>
        <p className="text-2xl font-bold text-green-700 mr-5">
          {calculateTotalPrice(products)}$
        </p>
      </div>
    </div>
  );
};
