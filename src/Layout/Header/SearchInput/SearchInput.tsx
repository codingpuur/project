import { useState, ChangeEvent } from "react";
import { MenuInterface, SubMenuInterface } from "@/Types/SideBarTypes";
import SVG from "@/utils/CommonSvgIcon/SVG";
import { SidebarMenu } from "@/Data/Layout/Sidebar/Menu";
import SearchValueDetails from "./SearchValueDetails";

const SearchInput = () => {
  const [suggestionOpen, setSuggestionOpen] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const [suggestion, setSuggestion] = useState<(MenuInterface | SubMenuInterface)[]>([]);
  const [searchValue, setSearchValue] = useState<string>("");

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    let searchKey = e.target.value.toLowerCase();
    setSearchValue(searchKey);

    if (searchKey !== "") {
      document.body.classList.add("offcanvas");
      let icon: JSX.Element | undefined;
      let suggestionArray: (MenuInterface | SubMenuInterface)[] = [];

      const deepSearchFun = (menuItem: MenuInterface | SubMenuInterface, searchKeyValue: string, mainTitle: string) => {
        if (menuItem.title.toLowerCase().includes(searchKeyValue) && menuItem.link) {
          const updatedList = { ...menuItem, mainTitle, icon };
          suggestionArray.push(updatedList);
        }
        if (!menuItem.subMenu) return;

        menuItem.subMenu &&
          menuItem.subMenu.forEach((mainSubItem: SubMenuInterface) => {
            if (!mainSubItem.svgIcon) {
              icon = menuItem.svgIcon;
              if (mainSubItem.subMenu) {
                mainSubItem.subMenu.forEach((mainChildItem: SubMenuInterface) => {
                  icon = menuItem.svgIcon;
                  deepSearchFun(mainChildItem, searchKeyValue, mainTitle);
                });
              } else {
                deepSearchFun(mainSubItem, searchKeyValue, mainTitle);
              }
            }
          });
      };

      SidebarMenu.forEach((mainItem) => {
        if (mainItem && mainItem.subMenu) {
          mainItem.subMenu.forEach((data) => {
            const mainTitle = data.title;
            deepSearchFun(data as SubMenuInterface, searchKey, mainTitle as string);
          });
        }
      });

      setSuggestion(suggestionArray);
      setSuggestionOpen(true);
    } else {
      setSuggestionOpen(false);
      setSuggestion([]);
      document.body.classList.remove("offcanvas");
    }
  };

  const handleToggle = () => {
    setOpen(!open);
    setSearchValue("");
    setSuggestionOpen(false);
    document.body.classList.remove("offcanvas");
  };

  return (
    <li className='serchinput'>
      <div className='serchbox'>
        <SVG iconId={"Search"} onClick={handleToggle} />
      </div>
      <div className={`form-group search-form ${open ? "open" : ""}`}>
        <input className="form-control" type='text' placeholder='Search here...' value={searchValue} onChange={(e: ChangeEvent<HTMLInputElement>) => handleSearch(e)} />
      </div>
      <div className={`Typeahead-menu custom-scrollbar ${suggestionOpen ? "is-open" : ""}`}>
        <SearchValueDetails setSuggestionOpen={setSuggestionOpen} suggestion={suggestion} setSearchValue={setSearchValue} setOpen={setOpen} />
      </div>
    </li>
  );
};

export default SearchInput;
