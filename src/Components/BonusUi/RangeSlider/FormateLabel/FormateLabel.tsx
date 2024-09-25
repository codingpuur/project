import { Card, CardBody, Col, Form, Row } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import LabelDemo from "./LabelDemo";
import { FormatedLabel } from "@/utils/Constant";
import { FormateLabelData } from "@/Data/BonusUi/Rangeslider/RangeSliderData";

const FormateLabel = () => {
  return (
    <Col sm={12} xl={6}>
      <Card>
        <CommonHeader title={FormatedLabel} subTitle={FormateLabelData} headClass="pb-0"/>
        <CardBody>
          <Form className="theme-form form-label-align-right range-slider">
            <Row className="mb-0">
              <LabelDemo />
            </Row>
          </Form>
        </CardBody>
      </Card>
    </Col>
  );
};

export default FormateLabel;
