import { miniProductSliderMock } from "@/mock/miniProductSlider";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { SimpleProductCard } from "@/components";

interface Props {
  sliderData: Array<unknown>;
}

export function simpleProductSlider({ sliderData }: Props) {
  return (
    <Swiper
      modules={[Autoplay]}
      slidesPerView={2}
      spaceBetween={16}
      autoplay={true}
      breakpoints={{
        768: {
          slidesPerView: 3,
          spaceBetween: 18,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 22,
        },
        1280: {
          slidesPerView: 5,
          spaceBetween: 24,
        },
      }}
    >
      {sliderData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <SimpleProductCard data={item} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
