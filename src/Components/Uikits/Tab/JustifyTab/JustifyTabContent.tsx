import { ImagePath } from "@/Constant";
import { justifyTabData } from "@/Data/Uikits/Tab/TabData";
import Image from "next/image";
import { TabContent, TabPane } from "reactstrap";

const JustifyTabContent: React.FC<{ tabId: string }> = ({ tabId }) => {
  return (
    <TabContent activeTab={tabId}>
      {justifyTabData &&
        justifyTabData.map((item, index) => (
          <TabPane tabId={item.id} key={index}>
            <div className='designer-details'>
              {item.data &&
                item.data.map((item, index) => (
                  <div className='designer-profile' key={index}>
                    <div className='designer-wrap'>
                      <Image className='designer-img' src={`${ImagePath}/${item.img}`} alt='profile' width={50} height={50} />
                      <div className='designer-content'>
                        <h6>{item.head}</h6>
                        <p>{item.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </TabPane>
        ))}
    </TabContent>
  );
};

export default JustifyTabContent;
