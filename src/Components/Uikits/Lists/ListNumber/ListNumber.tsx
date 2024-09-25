import { Card, CardBody, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Listswithnumbers } from "@/utils/Constant";
import CommonHeader from "@/Common/CommonHeader";
import { ListNumberTopData, numberListData } from "@/Data/Uikits/Lists/ListsData";

const ListNumber = () => {
  return (
    <Col xxl={4} md={6}>
      <Card>
        <CommonHeader title={Listswithnumbers} subTitle={ListNumberTopData} headClass="pb-0"/>
        <CardBody>
          <ListGroup numbered>
            <ListGroupItem className="fw-bold txt-primary">
              {'known for delivery of useful and usable solutions'}
            </ListGroupItem>
            {numberListData &&
              numberListData.map((item, index) => (
                <ListGroupItem className={`fw-bold ${item.class}`} key={index}>
                  {item.text}
                </ListGroupItem>
              ))}
          </ListGroup>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ListNumber;
