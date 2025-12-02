import type { Product } from "constant/basicType";

export interface ProductStoreState { 
  products: Product[],
  isLoading: boolean,
  total:number,
}

interface ProductStoreAction {
  fetchProducts: (limit:number,skip:number) => Promise<void>
}
export interface ProductsStore extends ProductStoreState,ProductStoreAction {}