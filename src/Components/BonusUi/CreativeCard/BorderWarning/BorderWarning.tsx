import { Card, CardBody, Col, ListGroup, ListGroupItem } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import { BorderWarningState } from "@/utils/Constant";
import { BorderWarningData, borderWarningState } from "@/Data/BonusUi/CreativeCard/CreativeCardData";

const BorderWarning = () => {
  return (
    <Col md={6} xxl={4}>
      <Card className="height-equal">
        <CommonHeader title={BorderWarningState} subTitle={BorderWarningData} headClass="border-l-warning border-3 pb-0" />
        <CardBody>
          <ListGroup numbered>
            {borderWarningState.map((data,index) => (
              <ListGroupItem className={`txt-${data.color} fw-bold`} key={index}>
                {data.detail}
              </ListGroupItem>
            ))}
          </ListGroup>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BorderWarning;
