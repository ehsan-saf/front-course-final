import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { ProductVerticalList } from "@/components";
import { topSellingMock } from "@/mock/topSelling";
import { trendingProductsMock } from "@/mock/trendingProducts";
import { topRatedMock } from "@/mock/topRated";
import { recentlyAddedMock } from "@/mock/recentlyAdded";

export function FeaturedListsSlider() {
  return (
    <Swiper
      className="w-full"
      modules={[Autoplay]}
      slidesPerView={1.1}
      spaceBetween={16}
      autoplay={true}
      breakpoints={{
        768: {
          slidesPerView: 2,
        },

        1024: {
          slidesPerView: 4,
          spaceBetween: 24,
        },
      }}
    >
      <SwiperSlide>
        <ProductVerticalList title="Top Selling" data={topSellingMock} />
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <ProductVerticalList
          title="Trending Products"
          data={trendingProductsMock}
        />
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <ProductVerticalList title="Recently added" data={recentlyAddedMock} />
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <ProductVerticalList title="Top Rated" data={topRatedMock} />
      </SwiperSlide>
    </Swiper>
  );
}
