import { TabContent, TabPane } from "reactstrap";
import AllTabs from "./AllTabs/AllTabs";
import PhotosTab from "./PhotosTab/PhotosTab";
import VideoTabs from "./VideoTabs/VideoTabs";
import { SearchTabContentProps } from "@/Types/Apps/SearchResultTypes";

const SearchTabContent: React.FC<SearchTabContentProps> = ({ activeTab }) => {
  return (
    <TabContent activeTab={activeTab}>
      <TabPane tabId={1} className='search-links'>
        <AllTabs />
      </TabPane>
      <TabPane tabId={2}>
        <PhotosTab />
      </TabPane>
      <TabPane tabId={3}>
        <VideoTabs />
      </TabPane>
    </TabContent>
  );
};

export default SearchTabContent;
