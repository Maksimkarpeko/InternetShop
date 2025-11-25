import type { Product } from "constant/basicType";

export interface ProductStoreState { 
  products: Product[],
  isLoading: boolean,
}

interface ProductStoreAction {
  fetchProducts: () => Promise<void>
}
export interface ProductsStore extends ProductStoreState,ProductStoreAction {}