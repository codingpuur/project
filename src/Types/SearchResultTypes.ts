import { MenuInterface, SubMenuInterface } from "./BookmarkType";

export interface SearchTabsPropsType {
    callbackActive: (val: number) => void;
    activeTabValue: number;
  }

export interface PropsType {
    activeTab: number;
  }

  export interface InformationCommonPropsType {
    item: {
      id?: number;
      url: string;
      title: string;
      detail: string;
      star: string;
      vote: string;
      news: string;
      videoLink: string;
      showStar?: boolean[];
    };
  }
  export interface ShowRatingProps {
    item: boolean[];
  }

   export interface SearchSuggestionListProp {
    setSuggestionOpen: (key:boolean)=>void;
    suggestion: MenuInterface[] | SubMenuInterface[] | [];
    setSearchValue:(key:string)=> void
    setOpen:(key:boolean)=>void;
}