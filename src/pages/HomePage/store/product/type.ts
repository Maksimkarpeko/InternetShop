import type { Product } from "constant/basicType";

export interface SelectProduct {
  selectProduct: Product;
  countSelect: number;
}
export interface ProductStoreState {
  products: Product[];
  isLoading: boolean;
  total: number;
  selectProducts: SelectProduct[];
}

interface ProductStoreAction {
  fetchProducts: (limit: number, skip: number) => Promise<void>;
  addToBucket: (product: Product, count: number) => boolean;
}
export interface ProductsStore extends ProductStoreState, ProductStoreAction {}
