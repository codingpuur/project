import { Card, CardBody, Col, Form, Row } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import { NegativeValues } from "@/utils/Constant";
import NagativevalueDemo from "./NagativevalueDemo";
import { NagativeValueData } from "@/Data/BonusUi/Rangeslider/RangeSliderData";

const NagativeValue = () => {
  return (
    <Col sm={12} xl={6}>
      <Card>
        <CommonHeader title={NegativeValues} subTitle={NagativeValueData} headClass="pb-0"/>
        <CardBody>
          <Form className="theme-form form-label-align-right range-slider">
            <Row className="mb-0">
              <NagativevalueDemo />
            </Row>
          </Form>
        </CardBody>
      </Card>
    </Col>
  );
};

export default NagativeValue;
