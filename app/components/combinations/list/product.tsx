import LazyImage from "components/divisions/image/lazyImage";
import Linker from "components/divisions/linker/linker";
import { useCallback, useEffect, useState } from "react";
import { List } from "react-virtualized";
import { selectProductState } from "src/redux/reducers/product/productReducer";
import { useAppSelector } from "src/redux/reduxHook";
import Rating from "../rate/rating";

export default function Product({ isMobile }: { isMobile: boolean }) {
  const state = useAppSelector(selectProductState);
  const [size, setSize] = useState([0, 0]);

  const rowRenderer = useCallback(
    ({ key, index, style }) => {
      const isLastLength = index >= state.productList.length;

      if (isLastLength) {
        return (
          <div
            key={key}
            style={{
              ...style,
              top: style.top + 10 * index,
            }}
          />
        );
      } else {
        const product = state.productList[index];
        const category = state.categoryList.find(
          (category) => category.id === product.category
        );
        return (
          <div
            key={key}
            style={{ ...style, marginBottom: 10, top: style.top + 10 * index }}
            className="bg-gray-100 dark:bg-gray-500 rounded-md w-full"
          >
            <Linker href="/" className="w-full flex p-2 gap-4 ">
              <LazyImage
                src={product.image}
                alt={`${product.title}_thumb_image`}
                width={96}
                height={96}
                isRound
              />
              <div className="w-full h-24 flex flex-col justify-between">
                <div className="w-full flex flex-col">
                  <div className="flex items-center justify-between">
                    <p className="font-semibold">{product.title}</p>
                    <p className="text-sm text-gray-300">{category.title}</p>
                  </div>
                  <p className="text-sm font-normal">{`${product.price
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원 / 개`}</p>
                </div>
                <div className="flex items-center justify-between">
                  <Rating rate={product.rating} />
                  <p className="text-xs">{product.seller.company}</p>
                </div>
              </div>
            </Linker>
          </div>
        );
      }
    },
    [state.productList]
  );

  useEffect(() => {
    const reSize = () => {
      let containerHeight;
      let containerWidth;

      if (isMobile) {
        containerHeight = Math.min(
          window.innerHeight * 0.67 - 40,
          state.productList.length * 112
        );
        containerWidth = window.innerWidth;
      } else {
        containerHeight = Math.min(
          680 * 0.67 - 40,
          state.productList.length * 112
        );
        containerWidth = 380;
      }

      setSize([containerWidth, 112, containerHeight]);
    };

    reSize();

    window.addEventListener("resize", reSize);

    return () => window.removeEventListener("resize", reSize);
  }, []);

  if (size[0] !== 0 && size[1] !== 0)
    return (
      <List
        width={size[0]}
        height={size[2]}
        rowCount={state.productList.length + 2}
        rowHeight={size[1]}
        rowRenderer={rowRenderer}
        style={{ padding: "0 16px 64px 16px" }}
      />
    );
}
