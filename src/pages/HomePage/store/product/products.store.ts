import { create } from "zustand";
import type { ProductsStore, ProductStoreState } from "./type";
import { getProducts } from "pages/HomePage/api/products";
import { persist } from "zustand/middleware";
const initialState: ProductStoreState = {
  products: [],
  isLoading: false,
  total: 0,
  selectProducts: [],
};

const useProductStore = create<ProductsStore>()(
  persist(
    (set) => ({
      ...initialState,
      fetchProducts: async (limit, skip) => {
        set({ isLoading: true });
        const data = await getProducts(limit, skip);
        set({
          products: data.products,
          total: data.total,
        });
        set({ isLoading: false });
      },
      addToBucket: (product, count) => {
        if (count <= 0) return false;
        set((state) => {
          const existing = state.selectProducts.find(
            (item) => item.selectProduct.id == product.id
          );
          if (existing) {
            return {
              selectProducts: state.selectProducts.map((item) =>
                item.selectProduct.id === product.id
                  ? { ...item, countSelect: item.countSelect + count }
                  : item
              ),
            };
          }
          return {
            selectProducts: [
              ...state.selectProducts,
              { selectProduct: product, countSelect: count },
            ],
          };
        });
        return true;
      }
    }),
    {
      name: "select-product",
      partialize: (state) => ({
        selectProducts: state.selectProducts,
      }),
    }
  )
);

export const useGetProducts = () => useProductStore((state) => state.products);
export const useIsLoading = () => useProductStore((state) => state.isLoading);
export const useFetchProducts = () =>
  useProductStore((state) => state.fetchProducts);
export const useTotal = () => useProductStore((state) => state.total);
export const useAddProduct = () =>
  useProductStore((state) => state.addToBucket);
export const useSelectProduct = () =>
  useProductStore((state) => state.selectProducts);
