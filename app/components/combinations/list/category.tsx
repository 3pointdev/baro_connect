import Linker from "components/divisions/linker/linker";
import CategoryModel from "src/models/category/category.model";
import { Swiper, SwiperSlide } from "swiper/react";
import { CategoryProps } from "./list.type";

export default function Category({
  list,
  addClass,
  slidePerView = 3.5,
  spaceBetween,
}: CategoryProps) {
  return (
    <Swiper
      className={`text-black dark:text-white whitespace-nowrap swiper-container w-full ${addClass}`}
      slidesPerView={slidePerView}
      spaceBetween={spaceBetween}
    >
      {list.map((category: CategoryModel) => {
        return (
          <SwiperSlide
            key={`category_${category.id}_${category.title}`}
            className="!w-fit"
          >
            <Linker href={category.url}>
              <p
                className={
                  category.isActive
                    ? "text-blue-400 font-semibold w-fit"
                    : "w-fit"
                }
              >
                {category.title}
              </p>
            </Linker>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
