import { api } from "config/axios.config";

export const getProducts = async () => {
  try {
    const data = await api.get("products");
    console.log(data);
    return data.data;
  } catch (e) {
    if (e instanceof Error) {
      console.log(e.message);
    }
  }
};
