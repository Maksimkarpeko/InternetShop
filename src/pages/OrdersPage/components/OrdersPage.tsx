import { BaseLayout } from "components/BaseLayouts/BaseLayouts";
import { OrderSummary } from "modules/OrderSummary/OrderSummary";
import { ShoppingCart } from "modules/ShoppingCart/ShoppingCart";
import { useSelectProduct } from "pages/HomePage";

export const OrdersPage = () => {
  const selectProduct = useSelectProduct();
  return (
    <BaseLayout>
        <div className="flex">
          <div className="">
            <h2 className="text-2xl font-semibold text-green-800 mb-6 mt-5 ml-[19%]">Shopping Card</h2>
            {selectProduct.map((item) => (
              <ShoppingCart item={item} />
            ))}
          </div>
          <div className="w-[50%]">
            <h2 className="text-2xl font-semibold text-green-800 mb-6 mt-5 ">OrderSummary</h2>
            <OrderSummary products={selectProduct}/>
          </div>
        </div>
    </BaseLayout>
  );
};
