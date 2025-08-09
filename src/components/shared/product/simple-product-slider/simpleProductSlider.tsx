import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { SimpleProductCard } from "@/components";
import { Product } from "@/types/Product";

interface Props {
  sliderData: Array<Product>;
}

export function SimpleProductSlider({ sliderData }: Props) {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <div className="flex flex-col">
      <div className="mb-8 hidden justify-end gap-2.5 lg:flex">
        <button
          ref={prevRef}
          className="flex items-center justify-center rounded-full bg-grey-1 p-3"
        >
          <span className="fi-rs-arrow-small-left flex h-3 w-3 items-center justify-center text-body"></span>
        </button>
        <button
          ref={nextRef}
          className="flex items-center justify-center rounded-full bg-brand-1 p-3"
        >
          <span className="fi-rs-arrow-small-right flex h-3 w-3 items-center justify-center text-white"></span>
        </button>
      </div>
      <Swiper
        className="w-full"
        modules={[Autoplay, Navigation]}
        slidesPerView={2}
        spaceBetween={16}
        autoplay={true}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          if (
            swiper.params.navigation &&
            typeof swiper.params.navigation !== "boolean"
          ) {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }
        }}
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
              <SimpleProductCard key={index} data={item} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
