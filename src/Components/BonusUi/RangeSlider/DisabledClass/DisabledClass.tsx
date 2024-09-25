import { Card, CardBody, Col, Form, Row } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import DisabledDemo from "./DisabledDemo";
import { Disabled } from "@/utils/Constant";
import { DisabledClassData } from "@/Data/BonusUi/Rangeslider/RangeSliderData";

const DisabledClass = () => {
  return (
    <Col sm={12} xl={6}>
      <Card>
        <CommonHeader title={Disabled} subTitle={DisabledClassData} headClass="pb-0" />
        <CardBody>
          <Form className="theme-form form-label-align-right range-slider">
            <Row className="mb-0">
              <DisabledDemo />
            </Row>
          </Form>
        </CardBody>
      </Card>
    </Col>
  );
};

export default DisabledClass;
