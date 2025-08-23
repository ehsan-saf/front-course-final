import { getProductsApi } from "@/api/product";
import {
  Banner,
  Section,
  FeaturedCategories,
  MiniProductSlider,
  SimpleProductSlider,
  IconBox,
  DealSlider,
  FeaturedListsSlider,
} from "@/components";
import { OffersSlider } from "@/components";
import { ApiResponse, ProductType } from "@/types";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";

export default function Home() {
  const { data: popularProducts } = useQuery<ApiResponse<ProductType>>({
    queryKey: [getProductsApi.name, "popular_products"],
    queryFn: () =>
      getProductsApi({
        populate: ["thumbnail", "categories"],
        filters: { is_popular: { $eq: true } },
      }),
  });

  const { data: popularFruits } = useQuery<ApiResponse<ProductType>>({
    queryKey: [getProductsApi.name, "popular_fruits"],
    queryFn: () =>
      getProductsApi({
        populate: ["thumbnail", "categories"],
        filters: { is_popular_fruit: { $eq: true } },
      }),
  });

  const { data: bestSellerProducts } = useQuery<ApiResponse<ProductType>>({
    queryKey: [getProductsApi.name, "best_seller_products"],
    queryFn: () =>
      getProductsApi({
        populate: ["thumbnail", "categories"],
        filters: { is_best_seller: { $eq: true } },
      }),
  });

  const { data: dealsOfDayProducts } = useQuery<ApiResponse<ProductType>>({
    queryKey: [getProductsApi.name, "deal_products"],
    queryFn: () =>
      getProductsApi({
        populate: ["thumbnail", "categories"],
        filters: { discount_expire_date: { $notNull: true } },
      }),
  });

  return (
    <>
      <Section className="mt-4 lg:mt-8">
        <Banner
          title="Don't miss amazing grocery deals"
          subtitle="Sign up for the daily newsletter"
          image="hero-image.png"
          bgImage="hero-bg.png"
        />
      </Section>
      <Section ariaLabel="featured categories">
        <h2 className="mb-11 text-base md:text-3xl">Feautred Categories</h2>
        <FeaturedCategories />
      </Section>
      <Section>
        <MiniProductSlider />
      </Section>

      {/* -------------------------------------------------------------------- */}

      <Section>
        <div className="mb-5 flex lg:mb-0">
          <Link href={"#"}>
            <h2 className="text-base md:text-3xl">Popular Products</h2>
          </Link>
          <IconBox
            icon="chevron-right"
            className="ml-auto text-body lg:hidden"
            link={"#"}
          />
        </div>
        {popularProducts && (
          <SimpleProductSlider sliderData={popularProducts.data} />
        )}
      </Section>

      {/* -------------------------------------------------------------------- */}

      <Section>
        <div className="mb-5 flex lg:mb-0">
          <Link href={"#"}>
            <h2 className="text-base md:text-3xl">Popular Fruits</h2>
          </Link>
          <IconBox
            icon="chevron-right"
            className="ml-auto text-body lg:hidden"
            link={"#"}
          />
        </div>
        {popularFruits && (
          <SimpleProductSlider sliderData={popularFruits.data} />
        )}
      </Section>

      {/* -------------------------------------------------------------------- */}

      <Section>
        <div className="mb-12 flex">
          <Link href={"#"}>
            <h2 className="text-base md:text-3xl">Best Seller</h2>
          </Link>
          <IconBox
            icon="chevron-right"
            className="ml-auto text-body lg:hidden"
            link={"#"}
          />
        </div>
        <div className="flex gap-2">
          <div className="hidden max-w-[330px] flex-col justify-between self-stretch rounded-[10px] border-2 border-brand-1 bg-[#3BB77E] bg-[url(/images/leaf-bg.jpg)] bg-cover bg-bottom bg-no-repeat p-12 pt-[38px] shadow-[20px_20px_40px_0_rgba(24,24,24,0.07)] xl:flex">
            <h3 className="text-heading-300 text-3xl">
              Bring nature into your home
            </h3>
            <Link
              href="#"
              className="mt-6 inline-flex max-w-max cursor-pointer items-center gap-2.5 rounded-[3px] bg-brand-1 py-2 pr-2.5 pl-[15px] text-white hover:bg-brand-2"
            >
              <div className="text-xs">Shop now</div>
              <IconBox icon="arrow-right" />
            </Link>
          </div>

          {bestSellerProducts && (
            <OffersSlider
              sliderData={bestSellerProducts.data}
              cardClassName="h-[320px] md:h-[500px]"
            />
          )}
        </div>
      </Section>

      {/* ------------------------------------------------------------------- */}

      <Section>
        <div className="mb-12 flex">
          <Link href={"#"}>
            <h2 className="text-base md:text-3xl">Deals of the Days</h2>
          </Link>
          <IconBox
            icon="chevron-right"
            className="ml-auto text-body lg:hidden"
            link={"#"}
          />
        </div>

        {dealsOfDayProducts && (
          <DealSlider sliderData={dealsOfDayProducts.data} />
        )}
      </Section>

      {/* ----------------------------------------------------------------- */}

      <Section>
        <FeaturedListsSlider />
      </Section>
    </>
  );
}
