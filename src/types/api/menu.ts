import { MenuItem } from "./menuItem";
import { Populate } from "./response";

export interface Menu {
  title: string;
  position: string;
  menu_items: Array<Populate<MenuItem>>;
}
