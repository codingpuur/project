import { Card, CardBody, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Scrollablelists } from "@/utils/Constant";
import ScrollableListBody from "./ScrollableListBody";
import CommonHeader from "@/Common/CommonHeader";
import Image from "next/image";
import { ScrollableListData } from "@/Data/Uikits/Lists/ListsData";
import { ImagePath } from "@/Constant";

const ScrollableList = () => {
  return (
    <Col xxl={4}>
      <Card>
        <CommonHeader title={Scrollablelists} subTitle={ScrollableListData} headClass='pb-0' />
        <CardBody>
          <ListGroup className='main-lists-content scrollbar-wrapper custom-scrollbar'>
            <ListGroupItem className='list-group-item-action list-hover-primary active'>
              <div className='list-wrapper gap-0'>
                <Image className='list-img' src={`${ImagePath}/user/9.jpg`} alt='profile' width={100} height={100} />
                <div className='list-content'>
                  <h6>{"Molly Boake"}</h6> 
                  <p>{"MollyBoake@rhyta.com"}</p>
                  <small>{"5 days ago"}</small>
                </div>
              </div>
            </ListGroupItem>
            <ScrollableListBody />
          </ListGroup>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ScrollableList;
