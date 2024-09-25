import { borderData } from "@/Data/Uikits/Tab/TabData";
import { TabContent, TabPane } from "reactstrap";

const TabComponent: React.FC<{ tabId: string }> = ({ tabId }) => {
  return (
    <TabContent activeTab={tabId}>
      {borderData &&
        borderData.map((item, index) => (
          <TabPane className='fade show' tabId={item.id} key={index}>
            {item.text}
          </TabPane>
        ))}
    </TabContent>
  );
};

export default TabComponent;
