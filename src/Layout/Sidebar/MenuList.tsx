import { useState } from "react";
import Link from "next/link";
import SVG from "@/utils/CommonSvgIcon/SVG";
import { useTranslation } from "react-i18next";
import { useAppSelector } from "@/Redux/Hooks";
import { MenuListInterface } from "../../Types/SideBarTypes";

const MenuList = ({ subMenuData, setIsOpen, isOpen, level }: MenuListInterface) => {
  const { t } = useTranslation("common");

  const [close,setClose] = useState(false)

  const { sidebarIconType } = useAppSelector((state) => state.themeCustomizer);
  const { layout } = useAppSelector((state) => state.themeCustomizer);
  const handleClick = (item: string) => {
      const temp:string[] = isOpen;
      temp[level] = item !== temp[level] ? item : "";
      setIsOpen([...temp]);
      setClose(temp[level].includes(item) ? true : false)
  };
  return (
    <>
      {subMenuData?.subMenu &&
        subMenuData?.subMenu?.map((item, index) => (
          <li className={level === 0 ? "main-submenu" : ""} key={index} >
            <Link
              className={`${level === 0 ? "d-flex sidebar-menu" : level === 1 ? "submenu-title" : ""} ${isOpen[level] === item.title ? "active" : ""}`}
              href={item.link ? item.link : "" }
              onClick={() => handleClick(item.title)}
            >
              {item.svgIcon && (
                <SVG className={`${sidebarIconType}-icon`} iconId={item.svgIcon  === "home" ? item.svgIcon : `${sidebarIconType}-${item.svgIcon}`} />
              )}
              {t(item.title)}
              {item.subMenu && <SVG className="arrow" iconId="Arrow-right" /> }
            </Link>
            {item?.subMenu && (
              <ul
                className={level === 0 ? "submenu-wrapper": level === 1 ? "nav-sub-childmenu submenu-content" : ""}
                style={{
                  display: `${ layout === "material-icon" ? isOpen[level] === item.title && close ? "" : "none" : "" }`
                }}
              >
                <MenuList subMenuData={item} isOpen={isOpen} setIsOpen={setIsOpen} level={level + 1}/>
              </ul>
            )}
          </li>
        ))}
    </>
  );
};

export default MenuList;
