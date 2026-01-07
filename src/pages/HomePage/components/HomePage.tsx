import { BaseLayout } from "components/BaseLayouts/BaseLayouts";
import { ProductList } from "modules/ProductList/ProductList";
import { useEffect, useState } from "react";
import {
  useFetchProducts,
  useGetProducts,
  useIsLoading,
  useTotal,
} from "../store/product/products.store";
import Pagination from "@mui/material/Pagination";
import { LoaderCircle, ShoppingBasket } from "lucide-react";
const LIMIT_PAGE = 30;
export const HomePage = () => {
  const fetchProducts = useFetchProducts();
  const products = useGetProducts();
  const isLoading = useIsLoading();
  const [page, setPage] = useState<number>(1);
  const totalPage = useTotal();
  useEffect(() => {
    fetchProducts(LIMIT_PAGE, page);
  }, [fetchProducts, page]);

  const filterProduct = products.filter(
    (item) =>
      !item.images.some(
        (img) => img.endsWith("/3.webp") || img.endsWith("/2.webp")
      )
  );
  const countPage = Math.ceil((totalPage - 30) / LIMIT_PAGE);
  return (
    <>
      <BaseLayout>
        {isLoading ? (
          <LoaderCircle className="animate-spin mt-5 m-auto" size={30} />
        ) : filterProduct.length > 0 ? (
          <>
            <ProductList
              title="Our Products"
              products={filterProduct}
              isLoading={isLoading}
            />
            <Pagination
              count={countPage}
              page={page}
              onChange={(_, num) => setPage(num)}
              variant="outlined"
              className="ml-[39%] mt-5 mb-5"
              size="large"
            />
          </>
        ) : (
          <div>
            <h2>No Products</h2>
            <p>Discover the Freedom of Less</p>
            <ShoppingBasket />
          </div>
        )}
      </BaseLayout>
    </>
  );
};
