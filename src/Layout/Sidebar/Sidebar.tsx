import { ImagePath } from "@/Constant";
import { useAppSelector } from "@/Redux/Hooks";
import Image from "next/image";
import Link from "next/link";
import SidebarMain from "./SidebarMain";
import { PropsTypes } from "@/Types/SideBarTypes";

const Sidebar : React.FC<PropsTypes>= ({setOpen,open}) => {
  const {toggleSidebar} = useAppSelector((state) => state.layout);
  return (
    <div className={`sidebar-wrapper ${open ? "sidebar-default" : ""} ${toggleSidebar ? "close_icon" : ""}`} >
        <div>
            <div className="logo-wrapper">
                <Link href={`/dashboards/portfolio/sentiment-analysis`}>
                    <Image className="img-flui" src={`${ImagePath}/logo/logo.png`}  alt="" height={40} width={80}/>
                </Link>
                <div className="back-btn">
                    <i className="fa fa-angle-left"></i>
                </div>
            </div>
            <SidebarMain setOpen={setOpen}/>
        </div>
    </div>
  );
};

export default Sidebar;
