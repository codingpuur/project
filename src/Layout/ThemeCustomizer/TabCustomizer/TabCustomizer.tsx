import { TabContent, TabPane } from "reactstrap";
import TabHeader from "./TabHeader";
import SidebarCusmizer from "./SidebarCusmizer/SidebarCusmizer";
import { TabCustomizerType } from "@/Types/ThemeCustomizerTypes";

const TabCustomizer:React.FC<TabCustomizerType> = ({ callbackNav, selected }) => {
  return (
    <TabContent activeTab={selected}>
      <TabHeader callbackNav={callbackNav} />
      <div className="customizer-body custom-scrollbar">
        <TabPane tabId="sidebar-type">
          <SidebarCusmizer />
        </TabPane>
      </div>
    </TabContent>
  );
};

export default TabCustomizer;
