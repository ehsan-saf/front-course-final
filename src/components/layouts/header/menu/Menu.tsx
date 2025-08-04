import { useMediaQuery } from "react-responsive";
import { ArrowDown, ArrowUp } from "lucide-react";
import { ImageView } from "@/components";
import { BrowseCategoryMock } from "@/mock/browseCategory";

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
                {BrowseCategoryMock.map((cat, index) => {
                  return (
                    <Link
                      key={index}
                      href={`${cat.path}`}
                      className="flex items-center gap-9"
                    >
                      <div className="w-12 h-8 flex-shrink-0">
                        <ImageView
                          src={`/icons/${cat.icon}`}
                          width={30}
                          height={30}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <span>{cat.title}</span>
                    </Link>
                  );
                })}
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
