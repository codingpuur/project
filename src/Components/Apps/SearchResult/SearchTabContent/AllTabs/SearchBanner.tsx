import { Card, Col } from "reactstrap";
import InformationCommon from "./InformationCommon";
import { searchInformation, searchInformation2 } from "@/Data/Apps/SearchResult/SearchResultData";
import Image from "next/image";
import { ImagePath } from "@/Constant";

const SearchBanner = () => {
  return (
    <Col xxl={4} xl={6} className='box-col-12 mt-4'>
      <Card className='o-hidden'>
        <div className='blog-box blog-shadow'>
          <Image className='img-fluid' src={`${ImagePath}/blog/blog.jpg`} alt='blog' width={454} height={284} />
          <div className='blog-details'>
            <p>{"25 July 2023"}</p>
            <h4>{"Accusamus et iusto odio dignissimos ducimus qui blanditiis."}</h4>
            <ul className='blog-social simple-list flex-row'>
              <li>
                <i className='icofont icofont-user'></i>
                {"Mark Jecno"}
              </li>
              <li>
                <i className='icofont icofont-thumbs-up'></i>
                {"Hits"}
              </li>
            </ul>
          </div>
        </div>
      </Card>
      <InformationCommon item={searchInformation} />
      <InformationCommon item={searchInformation2} />
    </Col>
  );
};

export default SearchBanner;
