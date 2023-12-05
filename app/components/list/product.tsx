import ProductSummaryModel from "src/models/product/productSummary.model";
import { selectProductState } from "src/redux/reducers/product/productReducer";
import { useAppSelector } from "src/redux/reduxHook";

export default function Product() {
  const productList = useAppSelector(selectProductState).productList;

  return (
    <div className="flex flex-col gap-4 px-4 py-2">
      {productList.map((product: ProductSummaryModel) => {
        return (
          <div
            key={`product_${product.id}_${product.title}`}
            className="bg-gray-500 rounded-md w-full h-28 flex p-2 gap-4"
          >
            <img
              src={product.image}
              alt={`${product.title}_thumb_image`}
              className="w-24 h-24 object-cover rounded-md"
            />
            <div className="w-full">
              <div className="flex items-center justify-between">
                <p className="font-semibold">{product.title}</p>
                <p className="text-xs">{product.seller.company}</p>
              </div>
              <p>{product.price}</p>
              <p>{product.rating}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
