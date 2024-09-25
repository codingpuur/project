import { Col, Row } from "reactstrap";
import { SearchPixelStrap } from "@/utils/Constant";
import { searchTabsData } from "@/Data/Apps/SearchResult/SearchResultData";
import InformationCommon from "./InformationCommon";
import SearchBanner from "./SearchBanner";
import PagesSort from "./PagesSort";

const AllTabs = () => {
  return (
    <Row>
      <Col xxl={8} xl={6} className='box-col-7'>
        <h4 className='f-w-700 mb-2'>{SearchPixelStrap}</h4>
        {searchTabsData.map((item, i) => (
          <InformationCommon item={item} key={i} />
        ))}
      </Col>
      <SearchBanner />
      <PagesSort />
    </Row>
  );
};

export default AllTabs;
