import BannerModel from "src/models/main/banner.model";
import { selectMainState } from "src/redux/reducers/main/mainReducer";
import { useAppSelector } from "src/redux/reduxHook";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Banner() {
  const bannerList = useAppSelector(selectMainState).bannerList;

  return (
    <section className="relative">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        className="text-white"
        slidesPerView={1}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
      >
        {bannerList.map((banner: BannerModel) => {
          return (
            <SwiperSlide key={`banner_${banner.id}_${banner.title}`}>
              <img src={banner.image} alt={banner.title} />
              <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-gray-800 via-gray-800/80 to-transparent" />
              <h3 className="absolute bottom-6 left-1/2 -translate-x-1/2 text-2xl">
                {banner.title}
              </h3>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}
