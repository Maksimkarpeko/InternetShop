import { create } from "zustand";
import type { ProductsStore, ProductStoreState } from "./type";
import { getProducts } from "pages/HomePage/api/products";

const initialState: ProductStoreState = {
  products: [],
  isLoading: false,
};

const useProductStore = create<ProductsStore>()((set) => ({
  ...initialState,
  fetchProducts: async () => {
    set({ isLoading: true });
    const data = await getProducts();
    set({ products: data.products });
    set({ isLoading: false });
  },
}));

export const useGetProducts = () => useProductStore((state) => state.products);
export const useIsLoading = () => useProductStore((state) => state.isLoading);
export const useFetchProducts = () =>
  useProductStore((state) => state.fetchProducts);
