import { Card, CardBody, Col, Row } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import { BasicInputGroupsHeading } from "@/utils/Constant";
import CommonCardFooter from "@/CommonElements/Footer/CommonCardFooter";
import Basic from "./Basic";
import Wrapping from "./Wrapping";
import { BasicInputGroupsAllData } from "@/Data/Form/FormControl/FormControlData";

const BasicInputGroups = () => {
  return (
    <Col xl={6}>
      <Card>
        <CommonHeader
          title={BasicInputGroupsHeading}
          subTitle={BasicInputGroupsAllData}
          headClass="pb-0"
        />
        <CardBody>
          <Row className="g-3">
            <Basic />
            <Wrapping />
          </Row>
        </CardBody>
        <CommonCardFooter />
      </Card>
    </Col>
  );
};

export default BasicInputGroups;
