import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { DealProduct } from "@/components";
import { Entity, ProductType } from "@/types";

interface Props {
  sliderData: Array<Entity<ProductType>>;
}

export function DealSlider({ sliderData }: Props) {
  return (
    <Swiper
      modules={[Autoplay]}
      slidesPerView={1}
      spaceBetween={16}
      autoplay={true}
      breakpoints={{
        768: {
          slidesPerView: 2,
          spaceBetween: 18,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 22,
        },
        1280: {
          slidesPerView: 3,
          spaceBetween: 24,
        },
        1400: {
          slidesPerView: 4,
          spaceBetween: 24,
        },
      }}
    >
      {sliderData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <DealProduct data={item} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
