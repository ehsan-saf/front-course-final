import { useMediaQuery } from "react-responsive";
import dynamic from "next/dynamic";
import Link from "next/link";
import { BrowseCategory } from "./browseCategory";
import { IconBox } from "@/components/shared";
import { useQuery } from "@tanstack/react-query";
import { getMenuApi } from "@/api/menu";
import { Entity, type MenuType, MenuItemType, Populate } from "@/types";
import { useOverlay } from "@/hooks";

interface Props {
  expanded: boolean;
  setExpanded: React.Dispatch<React.SetStateAction<boolean>>;
}

export function MenuComponent({ expanded, setExpanded }: Props) {
  const isDisplayLarge = useMediaQuery({ query: "(min-width: 64rem)" });

  useOverlay({
    onClick: () => {
      setExpanded(false);
    },
    isOverflowHidden: expanded,
  });

  const { data: menuData } = useQuery({
    queryKey: [getMenuApi.name],
    queryFn: getMenuApi,
  });

  let mainMenuItems: null | Populate<MenuItemType> = null;

  if (menuData) {
    const findMenu = menuData.data.filter(
      (item: Entity<MenuType>) => item.attributes.position === "main_menu",
    );
    if (findMenu.length > 0) {
      mainMenuItems = findMenu[0].attributes.menu_items;
    }
  }

  const content = (
    <>
      <BrowseCategory isDisplayLarge={isDisplayLarge} />
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
            <IconBox
              icon="flame"
              size={{ mobile: 20, nonMobile: 22 }}
              className="mb-1 text-brand-1"
            />
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
        <div
          className="offcanvas-body"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          {content}
        </div>
        <div className="offcanvas-backdrop"></div>
      </div>
    );
  }
}

export const Menu = dynamic(() => Promise.resolve(MenuComponent), {
  ssr: false,
});
