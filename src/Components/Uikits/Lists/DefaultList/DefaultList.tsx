import { defaultListsData } from "@/Data/Uikits/Lists/ListsData";
import CommonHeader from "@/Common/CommonHeader";
import { Card, CardBody, Col, ListGroup, ListGroupItem } from "reactstrap";

const DefaultList = () => {
  return (
    <>
      {defaultListsData.map((data, index) => (
        <Col xl='4' md={data.title === "Flush lists" ? "12" : "6"} key={index}>
          <Card>
            <CommonHeader title={data.title} subTitle={data.subTitle} headClass='pb-0' />
            <CardBody>
              <ListGroup flush={data.title === "Flush lists" ? true : false}>
                {data.listItem.map((item, index) => (
                  <ListGroupItem active={item === "UI Kits" ? true : false} key={index}>
                    <i className='icofont icofont-arrow-right'></i>
                    {item}
                  </ListGroupItem>
                ))}
              </ListGroup>
            </CardBody>
          </Card>
        </Col>
      ))}
    </>
  );
};

export default DefaultList;
