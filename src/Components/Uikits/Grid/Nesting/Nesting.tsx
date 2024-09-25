import { Card, CardBody, Col, Row } from "reactstrap";
import { Level1col3, Level2col4, Nestings } from "@/utils/Constant";
import NestingLevel2 from "./NestingLevel2";
import NestingLevel3 from "./NestingLevel3";
import { NestingData } from "@/Data/Uikits/Grid/GridData";
import CommonHeader from "@/Common/CommonHeader";

const Nesting = () => {
  return (
    <Col sm={12}>
      <Card>
        <CommonHeader title={Nestings} subTitle={NestingData} headClass='pb-0'/>
        <CardBody className="grid-showcase">
          <Row className="g-3">
            <Col xs={3}>
              <span>{Level1col3}</span>
            </Col>
            <NestingLevel2 />
            <NestingLevel3 />
            <Col xs={4}>
              <span>{Level2col4}</span>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Nesting;
