import { tabIconData } from "@/Data/Uikits/Tab/TabData";
import { TabContent, TabPane } from "reactstrap";

const IconTabBody:React.FC<{ tabId: string }> = ({ tabId }) => {
  return (
    <TabContent activeTab={tabId}>
      {tabIconData &&
        tabIconData.map((item, index) => (
          <TabPane tabId={item.id} key={index} >
            {item.text}
          </TabPane>
        ))}
    </TabContent>
  );
};

export default IconTabBody;
