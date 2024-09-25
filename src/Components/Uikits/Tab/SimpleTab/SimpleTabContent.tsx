import { simpleTabData } from "@/Data/Uikits/Tab/TabData";
import { TabContent, TabPane } from "reactstrap";

const SimpleTabContent:React.FC<{ tabId: string }> = ({ tabId }) => {
  return (
    <TabContent activeTab={tabId}>
      {simpleTabData &&
        simpleTabData.map((item, index) => (
          <TabPane className="fade show" tabId={item.id} key={index}>
            {item.text}
          </TabPane>
        ))}
    </TabContent>
  );
};

export default SimpleTabContent;
