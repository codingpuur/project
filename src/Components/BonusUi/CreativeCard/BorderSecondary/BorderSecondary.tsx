import { Badge, Card, CardBody, Col, ListGroup, ListGroupItem } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import { BorderSecondaryState } from "@/utils/Constant";
import { BorderSecondaryData, borderStateData } from "@/Data/BonusUi/CreativeCard/CreativeCardData";

const BorderSecondary = () => {
  return (
    <Col md={6} xxl={4}>
      <Card className="height-equal">
        <CommonHeader title={BorderSecondaryState} subTitle={BorderSecondaryData} headClass="border-l-secondary border-2 pb-0" />
        <CardBody className="scroll-demo">
          <ListGroup numbered className="scroll-rtl">
            {borderStateData &&
              borderStateData.map((item, index) => (
                <ListGroupItem className="d-flex align-items-start flex-wrap" key={index} >
                  <div className="ms-2 me-auto">{item.text}</div>
                  <Badge pill color={item.class} className="p-2">
                    {item.text2}
                  </Badge>
                </ListGroupItem>
              ))}
          </ListGroup>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BorderSecondary;
