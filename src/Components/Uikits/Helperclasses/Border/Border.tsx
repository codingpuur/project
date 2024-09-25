import { Card, CardBody, Col, Row } from "reactstrap";
import AdditiveBorder from "./AdditiveBorder";
import SubtractiveBorder from "./SubtractiveBorder";
import AdditiveRadius from "./AdditiveRadius";
import { BorderData } from "@/Data/Uikits/HelperClass/HelperClassData";
import { BordersAndDisplays } from "@/utils/Constant";
import CommonHeader from "@/Common/CommonHeader";

const Border = () => {
  return (
    <Col xs={12}>
      <Card>
        <CommonHeader title={BordersAndDisplays} subTitle={BorderData} headClass='pb-0'/>
        <CardBody>
          <Row className="g-3">
            <AdditiveBorder />
            <SubtractiveBorder />
            <AdditiveRadius />
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Border;
