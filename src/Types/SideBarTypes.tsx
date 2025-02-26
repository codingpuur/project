import { SidebarMenuTypes } from "@/Data/Layout/Sidebar/SidebarTypes";
import { Dispatch, SetStateAction } from "react";

interface SubMenuInterface2 {
  title: string;
  link?: string;
  svgIcon?: JSX.Element;
}
export interface SubMenuInterface {
  title: string;
  link?: string;
  subMenu?: SubMenuInterface2[];
  svgIcon?: JSX.Element;
}
export interface MenuInterface {
  title: string;
  svgIcon: JSX.Element;
  title1?: string;
  subMenu?: SubMenuInterface[];
  link?: string;
}
export interface SidebarTypes {
  menu: MenuInterface[];
  setIsOpen: Function;
  isOpen: [] | string[];
  level: number;
}

export interface SearchSuggestionListProp {
  setSuggestionOpen: (key: boolean) => void;
  suggestion: MenuInterface[] | SubMenuInterface[] | [];
  setSearchValue?: (key: string) => void;
}

export interface MenuListInterface {
  subMenuData: SidebarMenuTypes;
  setIsOpen: Dispatch<SetStateAction<string[]>>;
  isOpen: string[];
  level: number;
}

export interface PropsTypes {
  setOpen: (item: boolean) => void;
  open?: boolean;
}
