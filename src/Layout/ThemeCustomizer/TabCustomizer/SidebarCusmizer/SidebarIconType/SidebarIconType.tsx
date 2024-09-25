import { useAppDispatch } from "@/Redux/Hooks";
import ConfigDB from "@/Config/ThemeConfig";
import { Sidebar_Icon } from "@/utils/Constant";
import FillIcon from "./FillIcon";
import StrokeIcon from "./StrokeIcon";
import { addSidebarIconType } from "@/Redux/Reducer/ThemeCustomizerSlice";

const SidebarIconType = () => {
  const dispatch = useAppDispatch();
  const sideBarIconType = ConfigDB.data.settings.sidebar.iconType;

  const handleSideBarIconType = (type: string) => {
    dispatch(addSidebarIconType(type));
  };
  return (
    <div>
      <h6>{Sidebar_Icon}</h6>
      <ul className="sidebar-type layout-grid flex-row">
        <StrokeIcon handleSideBarIconType={handleSideBarIconType} sideBarIconType={sideBarIconType}/>
        <FillIcon handleSideBarIconType={handleSideBarIconType} sideBarIconType={sideBarIconType}/>
      </ul>
    </div>
  );
};

export default SidebarIconType;
