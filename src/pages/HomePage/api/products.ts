import { api } from "config/axios.config";
import type { Product } from "constant/basicType";

interface getProductsPromise {
  products: Product[];
  total: number;
}

export const getProducts = async (
  limit: number = 30,
  page: number
): Promise<getProductsPromise | undefined> => {
  try {
    const skip = (page - 1) * limit;
    const data = await api.get(`products?limit=${limit}&skip=${skip}`);
    console.log(data.data);
    return data.data;
  } catch (e) {
    if (e instanceof Error) {
      console.log(e.message);
    }
  }
};

export const getCategories = async () => {
  try {
    const data = await api.get("products/category-list");
    return data.data;
  } catch (e) {
    if (e instanceof Error) {
      console.log(e.message);
    }
  }
};
