import { leftTabData } from "@/Data/Uikits/Tab/TabData";
import { TabContent, TabPane } from "reactstrap";

const MaterialBody: React.FC<{ tabId: string }> = ({ tabId }) => {
  return (
    <TabContent activeTab={tabId}>
      {leftTabData &&
        leftTabData.map((item, index) => (
          <TabPane className='fade show' tabId={item.id} key={index}>
            {item.text}
          </TabPane>
        ))}
    </TabContent>
  );
};

export default MaterialBody;
