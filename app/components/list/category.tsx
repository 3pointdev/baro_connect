import CategoryModel from "src/models/category/category.model";
import { selectCategoryState } from "src/redux/reducers/category/categoryReducer";
import { useAppSelector } from "src/redux/reduxHook";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Category() {
  const categoryList = useAppSelector(selectCategoryState).categoryList;

  return (
    <Swiper
      className="text-white text-sm whitespace-nowrap swiper-container"
      slidesPerView={4.5}
    >
      {categoryList.map((category: CategoryModel) => {
        return (
          <SwiperSlide key={`category_${category.id}_${category.title}`}>
            <p className="pt-1">{category.title}</p>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
