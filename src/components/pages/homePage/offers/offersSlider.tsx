"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { SimpleProductCard } from "@/components";
import { Entity, ProductType } from "@/types";

interface Props {
  sliderData: Array<Entity<ProductType>>;
  cardClassName?: string;
}

export function OffersSlider({ sliderData, cardClassName }: Props) {
  return (
    <Swiper
      className="w-full"
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
            <SimpleProductCard
              key={index}
              data={item}
              showSaveLabel={true}
              className={cardClassName}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
