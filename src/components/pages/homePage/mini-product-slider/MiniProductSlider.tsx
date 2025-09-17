import Link from "next/link";
import { IconBox } from "@/components/shared";
import { MiniProductSlide } from "@/types/MiniProductSlide";
import { miniProductSliderMock } from "@/mock/miniProductSlider";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

export function MiniProductSlider() {
  return (
    <Swiper
      modules={[Autoplay]}
      slidesPerView={1}
      spaceBetween={20}
      autoplay={{ delay: 1500 }}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 24,
        },
      }}
    >
      {miniProductSliderMock.map((slide: MiniProductSlide, index) => {
        return (
          <SwiperSlide key={index}>
            <div
              className="flex min-h-[200px] items-center rounded-[10px] bg-[length:50%] bg-right-bottom bg-no-repeat pl-4 lg:min-h-[300px] lg:pl-12"
              style={{
                backgroundColor: `${slide.color}`,
                backgroundImage: `url(${slide.img})`,
              }}
            >
              <div className="flex basis-1/2 flex-col justify-between">
                <h3>{slide.title}</h3>

                <Link
                  href={slide.link}
                  className="mt-10 flex items-center gap-2.5 self-start rounded-[3px] bg-brand-1 px-3.5 py-2 text-xs text-white hover:bg-brand-2"
                >
                  <span>Shop Now</span>
                  <IconBox icon="arrow-right" color="white" />
                </Link>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
