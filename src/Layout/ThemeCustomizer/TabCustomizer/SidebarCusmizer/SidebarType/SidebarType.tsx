import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { Sidebar_Type } from "@/utils/Constant";
import Horizontal from "./Horizontal";
import Vertical from "./Vertical";
import { addSidebarLayouts } from "@/Redux/Reducer/ThemeCustomizerSlice";

const SidebarType = () => {
  const dispatch = useAppDispatch();
  const { layout } = useAppSelector((state) => state.themeCustomizer);

  const handleSidebarType = (type: string) => {
    dispatch(addSidebarLayouts(type));
  };
  return (
    <div>
      <h6>{Sidebar_Type}</h6>
      <ul className="sidebar-type layout-grid simple-list flex-row">
        <Vertical handleSidebarType={handleSidebarType} layout={layout}/>
        <Horizontal handleSidebarType={handleSidebarType} layout={layout}  />
      </ul>
    </div>
  );
};

export default SidebarType;
