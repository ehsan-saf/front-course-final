import { ImageView } from "../../imageView";
import { RatingStars } from "../rating-stars";

interface Props {
  data?: unknown;
}

export function SimpleProductCard({ data }: Props) {
  return (
    <div className="flex flex-col gap-1.5 p-3 md:p-4 md:pt-14">
      <div className="product-label bg-brand-1">-17%</div>
      <div className="relative flex h-24 justify-center md:h-44">
        <ImageView
          width={200}
          height={144}
          src="/images/18.jpg"
          alt="Mango image"
          className="h-full"
        />
        <div className="absolute top-1/2 left-1/2 hidden w-24 -translate-x-1/2 -translate-y-1/2 grid-cols-3 rounded-[5px] border-[1px] border-greenBorder bg-white text-brand-1 group-hover:grid">
          <button className="cursor-pointer border-r-[1px] border-[inherit]">
            <span className="fi-rs-shuffle mt-1.5 inline-block text-sm"></span>
          </button>
          <button className="cursor-pointer border-r-[1px] border-[inherit]">
            <span className="fi-rs-heart mt-1.5 inline-block text-sm"></span>
          </button>
          <button className="cursor-pointer">
            <span className="fi-rs-eye mt-1.5 inline-block text-sm"></span>
          </button>
        </div>
      </div>
      <h3 className="font-lato text-xs text-body">Hodo Foods</h3>
      <h4 className="ellipsis-2 text-xs md:text-base">
        Seeds of Change Organic Quinoa, Brown, & Red Rice
      </h4>
      <RatingStars rating={4} />
      <div
        aria-label="weight of the product"
        className="font-lato text-xs text-body"
      >
        500 gram
      </div>
      <div className="mt-auto flex items-center justify-between">
        <div className="flex items-center gap-1">
          <div className="text-sm text-brand-1 md:text-xl">$2.51</div>
          <div className="text-xs text-body line-through">$2.80</div>
        </div>
        {/* <!-- ----- Add Product button and Number input ----- --> */}
        <button className="add-btn flex items-center justify-center gap-2.5 rounded-sm bg-[#DEF9EC] p-1.5 group-[.added]:hidden md:px-2.5 md:py-1">
          <span className="hidden text-sm text-brand-1 md:inline">Add</span>
          <span className="fi-rs-plus-small h-4 w-4 -translate-y-0.5 text-base text-brand-1"></span>
        </button>
        {/* <!-- Input number when added ---- --> */}
        <div className="input-container hidden h-6 w-6 items-center justify-between rounded-sm border-[1px] border-brand-1 group-[.added]:flex md:h-7 md:w-16">
          <input
            type="number"
            value="1"
            className="no-spinner h-full w-full text-center text-sm text-brand-1"
          />
          <div className="hidden flex-col gap-1 pr-1.5 text-brand-1 md:flex">
            <span
              role="button"
              className="plus-count fi-rs-angle-small-up h-2.5 w-2.5 text-xs"
            ></span>
            <span
              role="button"
              className="minus-count fi-rs-angle-small-down h-2.5 w-2.5 text-xs"
            ></span>
          </div>
        </div>
        {/* <!-- End of add buttn and input --> */}
      </div>
    </div>
  );
}
