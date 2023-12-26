import { useEffect, useRef, useState } from "react";
import useIntersectionObserver from "src/hooks/useIntersectionObserver";
import CategoryModel from "src/models/category/category.model";
import { selectCategoryState } from "src/redux/reducers/category/categoryReducer";
import { useAppSelector } from "src/redux/reduxHook";
import { Swiper, SwiperSlide } from "swiper/react";

export default function ScrollCategory() {
  const containerRef = useRef(null);
  const categoryList = useAppSelector(selectCategoryState).categoryList;
  const [isFix, setIsFix] = useState<boolean>(false);
  const { targetRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.5, // Adjust as needed
  });

  useEffect(() => {
    if (isIntersecting) {
      setIsFix(false);
      if (containerRef.current.style.position === "fixed") {
        containerRef.current.style.position = "";
        containerRef.current.style.top = "";
      }
    } else {
      setIsFix(true);
      containerRef.current.style.position = "fixed";
      containerRef.current.style.top = "0px";
    }
  }, [isIntersecting]);

  return (
    <div>
      <div
        ref={containerRef}
        className={
          isFix
            ? "fixed !top-[32px] z-40 bg-gradient-to-b pb-6 from-gray-300/90 via-gray-300/90 dark:from-gray-800/20 dark:via-gray-800/90 to-transparent"
            : "block"
        }
      >
        <Swiper
          className="text-black dark:text-white text-sm whitespace-nowrap swiper-container w-screen"
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
      </div>
      <div ref={targetRef} className={isFix ? "h-10" : "h-0"} />
    </div>
  );
}
