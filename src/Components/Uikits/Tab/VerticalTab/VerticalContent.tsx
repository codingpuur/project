import { verticalTabData } from "@/Data/Uikits/Tab/TabData";
import { TabContent, TabPane } from "reactstrap";

const VerticalContent:React.FC<{ tabId: string }> = ({ tabId }) => {
  return (
    <TabContent activeTab={tabId}>
      {verticalTabData &&
        verticalTabData.map((item, index) => (
          <TabPane className="fade show" tabId={item.id} key={index} >
            {item.text}
          </TabPane>
        ))}
    </TabContent>
  );
};

export default VerticalContent;
