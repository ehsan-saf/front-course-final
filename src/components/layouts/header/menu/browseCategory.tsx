import { IconBox, ImageView } from "@/components";
import { useOverlay } from "@/hooks";
import { BrowseCategoryMock } from "@/mock/browseCategory";
import Link from "next/link";
import { useState, MouseEvent } from "react";

interface Props {
  isDisplayLarge: boolean;
}

export function BrowseCategory({ isDisplayLarge }: Props) {
  const [expanded, setExpanded] = useState(false);

  useOverlay({
    onClick: () => {
      setExpanded(false);
    },
  });

  function toggleExpanded(e: MouseEvent) {
    e.stopPropagation();
    setExpanded((stat) => !stat);
  }

  function handleMenuBodyClick(e: MouseEvent) {
    e.stopPropagation();
  }

  const desktop = (
    <div className="border-b-[1px] border-border">
      <div>
        <h2>
          <button
            className="accordion-button navbar-accordionButton"
            onClick={toggleExpanded}
          >
            <IconBox icon="layout-grid" />
            <span>Browse All Categories</span>
            {expanded ? (
              <IconBox icon="chevron-up" />
            ) : (
              <IconBox icon="chevron-down" />
            )}
          </button>
        </h2>
        <div
          className={`absolute ${expanded ? "h-[500px]" : "h-0"} z-2 w-lg translate-y-7 overflow-hidden`}
          onClick={handleMenuBodyClick}
        >
          <div className="flex flex-col gap-6 rounded-md border-1 border-greenBorder bg-white p-8">
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
                    className="flex items-center justify-start gap-2.5 rounded-md border-1 border-greenBorder p-3.5 hover:bg-green-100"
                  >
                    <div className="h-8 w-12 flex-shrink-0">
                      <ImageView
                        src={`/icons/${cat.icon}`}
                        width={30}
                        height={30}
                      />
                    </div>
                    <span>{cat.title}</span>
                  </Link>
                );
              })}
            </ul>
            <Link
              href={"/categories"}
              className="flex items-center gap-3.5 self-center"
            >
              <IconBox
                icon="circle-plus"
                className="text-brand-1"
                size={{ mobile: 24, nonMobile: 24 }}
              />
              <span className="text-sm text-body">More Categories</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );

  const nonDesktop = (
    <div className="mb-8 border-b-[1px] border-border">
      <div className={`accordion-item ${expanded ? "expanded" : ""}`}>
        <h2>
          <button
            className="accordion-button navbar-accordionButton"
            onClick={toggleExpanded}
          >
            <IconBox icon="layout-grid" />
            <span>Browse All Categories</span>
            {expanded ? (
              <IconBox icon="chevron-up" />
            ) : (
              <IconBox icon="chevron-down" />
            )}
          </button>
        </h2>
        <div className="accordion-collapse p-3" onClick={handleMenuBodyClick}>
          <div className="accordion-body">
            <ul className="flex flex-col gap-4">
              {BrowseCategoryMock.map((cat, index) => {
                return (
                  <Link
                    key={index}
                    href={`${cat.path}`}
                    className="flex items-center justify-start gap-2.5"
                  >
                    <div className="h-8 w-12 flex-shrink-0">
                      <ImageView
                        src={`/icons/${cat.icon}`}
                        width={30}
                        height={30}
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
  );

  {
    return isDisplayLarge ? desktop : nonDesktop;
  }
}
