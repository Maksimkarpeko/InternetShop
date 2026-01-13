import { create } from "zustand";
import type { ProductsStore, ProductStoreState, SelectProduct } from "./type";
import { getCategories, getProducts } from "pages/HomePage/api/products";
import { persist } from "zustand/middleware";
const initialState: ProductStoreState = {
  products: [],
  isLoading: false,
  total: 0,
  selectProducts: [],
  categories:[],
  maxPrice: 0,
};

const useProductStore = create<ProductsStore>()(
  persist(
    (set) => ({
      ...initialState,
      fetchProducts: async (limit, skip) => {
        set({ isLoading: true });
        const data = await getProducts(limit, skip);
        console.log(data);
        const allData = await getProducts(1000, 0);
        const Price = allData?.products.map(item => item.price);
        const maxPrice = Math.max(...(Price || [])); 
        set({
          products: data?.products,
          total: data?.total,
          maxPrice
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
      },
      deleteProduct: (product, count) => {
        if (count < 0) return false;
        set((state) => {
          return {
            selectProducts: state.selectProducts
              .map((item) => {
                if (item.selectProduct.id === product.id) {
                  const newCount = item.countSelect - count;
                  return newCount > 0
                    ? { ...item, countSelect: newCount }
                    : null;
                }
                return item;
              })
              .filter((item): item is SelectProduct => item !== null),
          };
        });
        return true;
      },
      getCategories: async () => {
        const dataCatalog = await getCategories();
        set({categories: dataCatalog})
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
export const useDeleteProduct = () => 
  useProductStore((state) => state.deleteProduct);
export const useGetCategories = () => useProductStore((state) => state.getCategories);
export const useCategories = () => useProductStore((state) => state.categories);
export const useMaxPrice = () => useProductStore((state) => state.maxPrice)