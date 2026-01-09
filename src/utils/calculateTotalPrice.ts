import type { SelectProduct } from "pages/HomePage";

export const calculateTotalPrice = (product: SelectProduct[]) => {
  return product
    .reduce((sum, item) => sum + item.selectProduct.price * item.countSelect, 0)
    .toFixed(2);
};
export const calculatePrice = (price:number,count:number) => {
  const result = price * count;
  return result.toFixed(2);
}