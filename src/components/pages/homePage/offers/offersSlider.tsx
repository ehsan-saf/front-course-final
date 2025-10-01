"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { OfferProductCard, SimpleProductCard } from "@/components";
import { Entity, ProductType } from "@/types";

interface Props {
  sliderData: Array<Entity<ProductType>>;
  cardClassName?: string;
}

export function OffersSlider({ sliderData, cardClassName }: Props) {
  return (
    <Swiper
      className="w-full"
      slidesPerView={1.4}
      spaceBetween={24}
      autoplay={true}
      breakpoints={{
        768: {
          slidesPerView: 2.5,
          spaceBetween: 18,
        },
        1024: {
          slidesPerView: 3.5,
          spaceBetween: 22,
        },
        1400: {
          slidesPerView: 4.5,
          spaceBetween: 24,
        },
      }}
    >
      {sliderData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <OfferProductCard
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
