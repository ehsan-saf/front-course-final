import { IconBox, ImageView } from "@/components";
import { BrowseCategoryMock } from "@/mock/browseCategory";
import Link from "next/link";

interface Props {
  expanded: boolean;
  setExpanded: React.Dispatch<React.SetStateAction<boolean>>;
  isDisplayLarge: boolean;
}

export function BrowseCategory({
  expanded,
  setExpanded,
  isDisplayLarge,
}: Props) {
  const desktop = (
    <div className="border-b-[1px] border-border">
      <div>
        <h2>
          <button
            className="accordion-button navbar-accordionButton"
            onClick={() => setExpanded((stat) => !stat)}
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
          className={`absolute ${expanded ? "h-[400px]" : "h-0"} z-2 w-lg translate-y-7 overflow-hidden`}
        >
          <div className="rounded-md border-1 border-greenBorder bg-white p-8">
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
                    className="flex items-center justify-start gap-2.5 rounded-md border-1 border-greenBorder p-3.5"
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

  const nonDesktop = (
    <div className="mb-8 border-b-[1px] border-border">
      <div className={`accordion-item ${expanded ? "expanded" : ""}`}>
        <h2>
          <button
            className="accordion-button navbar-accordionButton"
            onClick={() => setExpanded((stat) => !stat)}
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
        <div className="accordion-collapse p-3">
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
