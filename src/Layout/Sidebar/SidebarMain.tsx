import SimpleBar from "simplebar-react";
import SidebarBack from "./SidebarBack";
import MenuList from "./MenuList";
import { useState } from "react";
import { SidebarMenuTypes } from "../../Data/Layout/Sidebar/SidebarTypes";
import { useAppSelector } from "../../Redux/Hooks";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import SVG from "@/utils/CommonSvgIcon/SVG";
import { SidebarMenu } from "@/Data/Layout/Sidebar/Menu";
import { PropsTypes } from "@/Types/SideBarTypes";
import { BotMessageSquare, BriefcaseBusiness, CalendarCheck, ChartCandlestick, ClipboardMinus, UserPen } from "lucide-react";
import { BookOpen, Info } from "react-feather";

const SidebarMain = ({setOpen,open}:PropsTypes) => {
  const { t } = useTranslation("common");
  const { sidebarIconType } = useAppSelector((state) => state.themeCustomizer);
  const [isOpen, setIsOpen] = useState<string[]>([]);
  const [sideMenu,setSideMenu] = useState("")
  const { layout } = useAppSelector((state) => state.themeCustomizer);
  const handleClick= (item:SidebarMenuTypes) => {
    if(layout === "material-icon"){
      let menu:string =sideMenu
      menu = sideMenu !== item.title ? item.title : ""  
      setSideMenu(menu);
      setOpen(menu !== "" ? true : false)
    }
  }

  const icon:any ={
    "market":<ChartCandlestick />,
    "event":<CalendarCheck/>,
    "portfolio":<BriefcaseBusiness />,
    "chat": <BotMessageSquare />,
    "report":   <ClipboardMinus />,
    "profile":<UserPen />,
    "learning":<BookOpen />,
    "help":  <Info />

  }


  return (
    <nav className="sidebar-main">
      <div id="sidebar-menu">
        <ul className="sidebar-links simple-list" id="simple-bar"> 
          <SimpleBar className="w-100 simplebar-scrollable-y h-100">
          <SidebarBack />
          {SidebarMenu.map((data,index) => (
            <li className={`sidebar-list`} key={index} >
              <Link className={`sidebar-link sidebar-title ${sideMenu === data.title ? "active" : "" }`} href="" onClick={()=>handleClick(data)}>
                {/* <SVG className={`${sidebarIconType}-icon`} iconId={`${sidebarIconType === "fill" ? "fill-" : ""}${data.svgIcon}`} /> */}
                {icon[data?.svgIcon || 'market']}
             
                <span>{t(data.title)}</span>
              </Link>
              <ul className= "sidebar-submenu custom-scrollbar simple-list"
                style={{display : `${layout === "material-icon" ? data.title === sideMenu  ? "block" : "none" : ""}`}}>
                {data.title1 && <li className="sidebar-head">{t(data.title1)}</li>}
                <MenuList subMenuData={data} isOpen={isOpen} setIsOpen={setIsOpen} level={0} />
              </ul>
            </li>
          ))}
          </SimpleBar>
        </ul>
      </div>
    </nav>
  );
};

export default SidebarMain;
