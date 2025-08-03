import { useMediaQuery } from "react-responsive";
import { ArrowDown, ArrowUp } from "lucide-react";
import { ImageView } from "@/components";

interface Props {
  expanded: boolean;
  setExpanded: React.Dispatch<React.SetStateAction<boolean>>;
}

export function MenuComponent({ expanded, setExpanded }: Props) {
  const isDisplayLarge = useMediaQuery({ query: "(min-width: 64rem)" });
  const [categoryExpanded, setCategoryExpanded] = useState(false);

  const content = (
    <>
      <div
        className={`accordion ${
          !isDisplayLarge ? "border-b-[1px]" : ""
        }  border-border`}
      >
        <div
          className={`accordion-item relative ${
            categoryExpanded ? "expanded" : ""
          }`}
        >
          <h2 className="accordion-header">
            <button
              className="accordion-button navbar-accordionButton"
              onClick={() => setCategoryExpanded((stat) => !stat)}
            >
              <span className="fi-rs-apps"></span>
              <span>Browse All Categories</span>
              {categoryExpanded ? <ArrowUp /> : <ArrowDown />}
            </button>
          </h2>
          <div
            className={`accordion-collapse ${
              isDisplayLarge
                ? "w-lg absolute z-2 translate-y-7 border-greenBorder bg-white"
                : ""
            }`}
          >
            <div className="accordion-body mt-4">
              <ul
                className={`${
                  isDisplayLarge ? "grid grid-cols-2" : "flex flex-col"
                } gap-4 pb-2`}
              >
                <li className="flex items-center gap-9">
                  <div className="w-12 h-8 flex-shrink-0">
                    <ImageView
                      src="/icons/031-groceries.svg"
                      width={30}
                      height={30}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  Milks and Dairies
                </li>
                <li className="flex items-center gap-9">
                  <div className="w-12 h-8 flex-shrink-0">
                    <ImageView
                      src="/icons/044-dress.svg"
                      width={30}
                      height={30}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  Clothing & Beauty
                </li>
                <li className="flex items-center gap-9">
                  <div className="w-12 h-8 flex-shrink-0">
                    <ImageView
                      src="icons/021-pet-food.svg"
                      width={30}
                      height={30}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  Pet Foods & Toy
                </li>
                <li className="flex items-center gap-9">
                  <div className="w-12 h-8 flex-shrink-0">
                    <ImageView
                      src="/icons/006-dairy-products.svg"
                      width={30}
                      height={30}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  Baking material
                </li>
                <li className="flex items-center gap-9">
                  <div className="w-12 h-8 flex-shrink-0">
                    <ImageView
                      src="/icons/009-fruit.svg"
                      width={30}
                      height={30}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  Fresh Fruit
                </li>
                <li className="flex items-center gap-9">
                  <div className="w-12 h-8 flex-shrink-0">
                    <ImageView
                      src="/icons/004-drinks.svg"
                      width={30}
                      height={30}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  Wines & Drinks
                </li>
                <li className="flex items-center gap-9">
                  <div className="w-12 h-8 flex-shrink-0">
                    <ImageView
                      src="/icons/026-crab.svg"
                      width={30}
                      height={30}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  Fresh Seafood
                </li>
                <li className="flex items-center gap-9">
                  <div className="w-12 h-8 flex-shrink-0">
                    <ImageView
                      src="/icons/001-sweet.svg"
                      width={30}
                      height={30}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  Fast food
                </li>
                <li className="flex items-center gap-9">
                  <div className="w-12 h-8 flex-shrink-0">
                    <ImageView
                      src="/icons/032-grocery.svg"
                      width={30}
                      height={30}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  Vegetables
                </li>
                <li className="flex items-center gap-9">
                  <div className="w-12 h-8 flex-shrink-0">
                    <ImageView
                      src="/icons/010-milk-products.svg"
                      width={30}
                      height={30}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  Bread and Juice
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <ul
        className={`flex ${
          isDisplayLarge ? "flex-row items-center" : "flex-col items-start"
        } gap-8`}
      >
        <li>
          <Link
            href="/deals"
            className="flex items-center gap-2 hover:text-brand-1"
          >
            <span className="fi-rs-flame text-xl text-brand-1"></span>
            <span>Hot Deals</span>
          </Link>
        </li>
        <li>
          <Link href={"/"} className="hover:text-brand-1">
            Home
          </Link>
        </li>
        <li>
          <Link href="/vegetables" className="hover:text-brand-1">
            Vegetables
          </Link>{" "}
        </li>
        <li>
          <Link href="/drink" className="hover:text-brand-1">
            Drink
          </Link>{" "}
        </li>
      </ul>
    </>
  );

  if (isDisplayLarge) {
    return content;
  } else {
    return (
      <div className={`offcanvas ${expanded ? "expanded" : ""}`}>
        <div className="offcanvas-body">{content}</div>
        <div
          className="offcanvas-backdrop"
          onClick={() => setExpanded(false)}
        ></div>
      </div>
    );
  }
}

import dynamic from "next/dynamic";
import { useState } from "react";
import Link from "next/link";

export const Menu = dynamic(() => Promise.resolve(MenuComponent), {
  ssr: false,
});
