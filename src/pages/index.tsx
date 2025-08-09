import {
  Banner,
  Section,
  FeaturedCategories,
  MiniProductSlider,
  SimpleProductSlider,
} from "@/components";
import { popularFruitsMock, popularProductsMock } from "@/mock/products";

export default function Home() {
  return (
    <>
      <Section>
        <Banner
          title="Don't miss amazing grocery deals"
          subtitle="Sign up for the daily newsletter"
          image="hero-image.png"
          bgImage="hero-bg.png"
        />
      </Section>
      <Section ariaLabel="featured categories">
        <FeaturedCategories />
      </Section>
      <Section>
        <MiniProductSlider />
      </Section>

      <Section>
        <h2 className="mb-11 text-base md:text-3xl">Popular Products</h2>
        <SimpleProductSlider sliderData={popularProductsMock} />
      </Section>

      <Section>
        <h2 className="mb-11 text-base md:text-3xl">Popular Fruits</h2>
        <SimpleProductSlider sliderData={popularFruitsMock} />
      </Section>
    </>
  );
}
