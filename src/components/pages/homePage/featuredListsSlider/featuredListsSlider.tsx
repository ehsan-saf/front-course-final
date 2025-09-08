import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { ProductVerticalList } from "@/components";
import { useQuery } from "@tanstack/react-query";
import { getProductsApi } from "@/api/product";
import { ApiResponse, ProductType } from "@/types";
import { InView } from "react-intersection-observer";

export function FeaturedListsSlider() {
  const { data: topSellingProducts } = useQuery<ApiResponse<ProductType>>({
    queryKey: [getProductsApi.name, "top_selling_products"],
    queryFn: () =>
      getProductsApi({
        populate: ["thumbnail", "categories"],
        filters: { is_top_selling: { $eq: true } },
        pagination: { start: 0, limit: 3, withCount: false },
      }),
  });

  const { data: trendingProducts } = useQuery<ApiResponse<ProductType>>({
    queryKey: [getProductsApi.name, "trending_products"],
    queryFn: () =>
      getProductsApi({
        populate: ["thumbnail", "categories"],
        filters: { is_trending: { $eq: true } },
        pagination: { start: 0, limit: 3, withCount: false },
      }),
  });

  const { data: topRatedProducts, refetch: refetchTopRatedProducts } = useQuery<
    ApiResponse<ProductType>
  >({
    queryKey: [getProductsApi.name, "top_rated_products"],
    queryFn: () =>
      getProductsApi({
        populate: ["thumbnail"],
        sort: ["rate:desc"],
        pagination: { start: 0, limit: 3, withCount: false },
      }),

    enabled: false,
  });

  return (
    <Swiper
      className="w-full"
      modules={[Autoplay]}
      slidesPerView={1.1}
      spaceBetween={16}
      autoplay={{
        delay: 2000,
        pauseOnMouseEnter: true,
      }}
      breakpoints={{
        500: {
          slidesPerView: 1.2,
        },

        900: {
          slidesPerView: 2,
          spaceBetween: 22,
        },

        1024: {
          slidesPerView: 4,
          spaceBetween: 24,
        },
      }}
    >
      <SwiperSlide>
        {topSellingProducts && (
          <ProductVerticalList
            title="Top Selling"
            data={topSellingProducts?.data}
          />
        )}
      </SwiperSlide>
      {/* ------------------------------------------------- */}
      <SwiperSlide>
        {trendingProducts && (
          <ProductVerticalList
            title="Trending Products"
            data={trendingProducts.data}
          />
        )}
      </SwiperSlide>
      {/* ------------------------------------------------- */}
      <SwiperSlide>
        {topSellingProducts && (
          <ProductVerticalList
            title="Recently added"
            data={topSellingProducts?.data}
          />
        )}
      </SwiperSlide>
      {/* ------------------------------------------------- */}
      <SwiperSlide>
        <InView
          as="div"
          onChange={(inView) => inView && refetchTopRatedProducts()}
        >
          {topRatedProducts && (
            <ProductVerticalList
              title="Top Rated"
              data={topRatedProducts?.data}
            />
          )}
        </InView>
      </SwiperSlide>
    </Swiper>
  );
}
