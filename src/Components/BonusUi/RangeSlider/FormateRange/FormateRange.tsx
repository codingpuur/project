import { Card, CardBody, Col, Form, Row } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import FormateDemo from "./FormateDemo";
import { FormatedLabel } from "@/utils/Constant";
import { FormateRangeData } from "@/Data/BonusUi/Rangeslider/RangeSliderData";

const FormateRange = () => {
  return (
    <Col sm={12} xl={6}>
      <Card>
        <CommonHeader title={FormatedLabel} subTitle={FormateRangeData} headClass="pb-0"/>
        <CardBody>
          <Form className="theme-form form-label-align-right range-slider">
            <Row className="mb-0">
              <FormateDemo />
            </Row>
          </Form>
        </CardBody>
      </Card>
    </Col>
  );
};

export default FormateRange;
