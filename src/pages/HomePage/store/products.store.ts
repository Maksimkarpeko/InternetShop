import { create } from "zustand";
import type { ProductsStore, ProductStoreState } from "./type";
import { getProducts } from "pages/HomePage/api/products";

const initialState: ProductStoreState = {
  products: [],
  isLoading: false,
  total: 0,
};

const useProductStore = create<ProductsStore>()((set) => ({
  ...initialState,
  fetchProducts: async (limit,skip:number) => {
    set({ isLoading: true });
    const data = await getProducts(limit,skip);
    console.log(data);
    set({ 
      products: data.products,
      total:data.total,
     });
    set({ isLoading: false });
  },
}));

export const useGetProducts = () => useProductStore((state) => state.products);
export const useIsLoading = () => useProductStore((state) => state.isLoading);
export const useFetchProducts = () =>
  useProductStore((state) => state.fetchProducts);
export const useTotal = () => useProductStore((state) => state.total);