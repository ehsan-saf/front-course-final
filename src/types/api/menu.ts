import { MenuItemType } from "./menuItem";
import { Populate } from "./response";

export interface MenuType {
  title: string;
  position: string;
  menu_items: Populate<MenuItem>;
}
