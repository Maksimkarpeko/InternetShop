import type { SelectProduct } from "pages/HomePage";

export const calculateTotalPrice = (product: SelectProduct[]) => {
  return product
    .reduce((sum, item) => sum + item.selectProduct.price * item.countSelect, 0)
    .toFixed(2);
};
