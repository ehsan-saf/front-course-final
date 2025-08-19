import { MenuItemType } from "@/types";
import { Populate } from "@/types";

export interface MenuType {
  title: string;
  position: string;
  menu_items: Populate<MenuItemType>;
}
