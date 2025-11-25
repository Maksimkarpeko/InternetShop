import { BaseLayout } from "components/BaseLayouts/BaseLayouts";
import { ProductList } from "modules/ProductList/ProductList";
import { useEffect } from "react";
import {
  useFetchProducts,
  useGetProducts,
  useIsLoading,
} from "./store/products.store";

export const HomePage = () => {
  const fetchProducts = useFetchProducts();
  const products = useGetProducts();
  const isLoading = useIsLoading();
  useEffect(() => {
    fetchProducts();
  }, []);
  const filterProduct = products.filter(
    (item) =>
      !item.images.some(
        (img) => img.endsWith("/3.webp") || img.endsWith("/2.webp")
      )
  );

  return (
    <>
      <BaseLayout>
        <ProductList
          title="Our Products"
          products={filterProduct}
          isLoading={isLoading}
        />
      </BaseLayout>
    </>
  );
};
