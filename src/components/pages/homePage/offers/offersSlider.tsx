import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { SimpleProductCard } from "@/components";
import { Product } from "@/types/Product";

interface Props {
  sliderData: Array<Product>;
}

export function OffersSlider({ sliderData }: Props) {
  return (
    <Swiper
      className="w-full"
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
          spaceBetween: 15,
        },
      }}
    >
      {sliderData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <SimpleProductCard key={index} data={item} showSaveLabel={true} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
