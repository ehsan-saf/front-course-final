import { useMediaQuery } from "react-responsive";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useState } from "react";
import { BrowseCategory } from "./browseCategory";

interface Props {
  expanded: boolean;
  setExpanded: React.Dispatch<React.SetStateAction<boolean>>;
}

export function MenuComponent({ expanded, setExpanded }: Props) {
  const isDisplayLarge = useMediaQuery({ query: "(min-width: 64rem)" });

  const [categoryExpanded, setCategoryExpanded] = useState(false);

  const content = (
    <>
      <BrowseCategory
        expanded={categoryExpanded}
        setExpanded={setCategoryExpanded}
        isDisplayLarge={isDisplayLarge}
      />
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

export const Menu = dynamic(() => Promise.resolve(MenuComponent), {
  ssr: false,
});
