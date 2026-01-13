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
  categories: string[];
  maxPrice: number,
}

interface ProductStoreAction {
  fetchProducts: (limit: number, skip: number) => Promise<void>;
  addToBucket: (product: Product, count: number) => boolean;
  deleteProduct: (product: Product, count:number) => boolean;
  getCategories: () => Promise<void>
}
export interface ProductsStore extends ProductStoreState, ProductStoreAction {}
