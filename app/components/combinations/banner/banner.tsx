import LazyImage from "components/divisions/image/lazyImage";
import Linker from "components/divisions/linker/linker";
import { NextRouter } from "next/router";
import BannerModel from "src/models/main/banner.model";
import { selectMainState } from "src/redux/reducers/main/mainReducer";
import { useAppSelector } from "src/redux/reduxHook";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Banner({
  router,
  isMobile,
}: {
  router: NextRouter;
  isMobile: boolean;
}) {
  const bannerList = useAppSelector(selectMainState).bannerList;

  return (
    <section className="relative h-fit">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        className="text-black dark:text-white"
        slidesPerView={1}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
      >
        {bannerList.map((banner: BannerModel) => {
          return (
            <SwiperSlide
              key={`banner_${banner.id}_${banner.title}`}
              onClick={() => router.push(banner.url)}
            >
              <Linker href={banner.url}>
                <LazyImage
                  src={banner.image}
                  alt={`${banner.title}_banner_image`}
                  addClass={isMobile ? "!max-h-[33vh]" : "!max-h-[33%]"}
                />
                <div
                  className={`absolute bottom-0 left-0 w-full ${
                    banner.subTitle
                      ? " h-28 dark:via-gray-800/90"
                      : "h-20 dark:via-gray-800/80"
                  } bg-gradient-to-t dark:from-gray-800 from-white via-white/80 to-transparent`}
                />
                <h3
                  className={`absolute ${
                    banner.subTitle ? " bottom-12" : "bottom-6"
                  } left-1/2 -translate-x-1/2 text-2xl`}
                >
                  {banner.title}
                </h3>
                <h3 className="absolute bottom-6 left-1/2 -translate-x-1/2 text-md  whitespace-nowrap text-gray-700 dark:text-gray-300">
                  {banner.subTitle}
                </h3>
              </Linker>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}
