import { Col } from "reactstrap";
import { Href } from "@/utils/Constant";
import { searchTabsData } from "@/Data/Apps/SearchResult/SearchResultData";
import PagesSort from "../AllTabs/PagesSort";
import Link from "next/link";

const VideoTab1 = () => {
  return (
    <Col xxl={6}>
      <h4 className='f-w-700 mb-2'>{"About 6,000 results (0.60 seconds)"}</h4>
      {searchTabsData.slice(0, 3).map((item) => (
        <div className='info-block d-flex' key={item.id}>
          <iframe className='me-3' width='200' height='100' src={item.videoLink} title=''></iframe>
          <div className='flex-grow-1'>
            <Link href={Href}>{item.url}</Link>
            <h6>{item.title}</h6>
            <p>{item.detail}</p>
            <div className='star-ratings'>
              <ul className='search-info flex-row'>
                <li>{item.star}</li>
                <li>{item.vote}</li>
                <li>{item.news}</li>
              </ul>
            </div>
          </div>
        </div>
      ))}
      <PagesSort />
    </Col>
  );
};

export default VideoTab1;
