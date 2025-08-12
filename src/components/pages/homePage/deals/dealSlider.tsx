import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Product } from "@/types/Product";
import { DealProduct } from "@/components";

interface Props {
  sliderData: Array<Product>;
}

export function DealSlider({ sliderData }: Props) {
  return (
    <Swiper
      className="w-full"
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
