import { BaseLayout } from "components/BaseLayouts/BaseLayouts";
import { ProductList } from "modules/ProductList/ProductList";
import { useEffect, useState } from "react";
import {
  useFetchProducts,
  useGetProducts,
  useIsLoading,
  useTotal,
} from "./store/products.store";
import Pagination from "@mui/material/Pagination";
import { ShoppingBasket } from "lucide-react";
const LIMIT_PAGE = 30;
export const HomePage = () => {
  const fetchProducts = useFetchProducts();
  const products = useGetProducts();
  const isLoading = useIsLoading();
  const [page, setPage] = useState<number>(1);
  const totalPage = useTotal();
  useEffect(() => {
    fetchProducts(LIMIT_PAGE, page);
  }, [page]);
  const filterProduct = products.filter(
    (item) =>
      !item.images.some(
        (img) => img.endsWith("/3.webp") || img.endsWith("/2.webp")
      )
  );
  const countPage = Math.ceil((totalPage-30) / LIMIT_PAGE);
  return (
    <>
      <BaseLayout>
        {filterProduct.length > 0 ? (
            <ProductList
              title="Our Products"
              products={filterProduct}
              isLoading={isLoading}
            />
        ) : (
          <div>
            <h2>
              No Products
            </h2>
            <p>Discover the Freedom of Less</p>
            <ShoppingBasket/>
          </div>
        )}
        <Pagination
          count={countPage}
          page={page}
          onChange={(_, num) => setPage(num)}
          variant="outlined"
          className="ml-[39%] mt-5 mb-5"
          size="large"
        />
      </BaseLayout>
    </>
  );
};
