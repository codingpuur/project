import { Card, CardBody, Col, Form, Row } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import DraggableDemo from "./DraggableDemo";
import { DraggableRange } from "@/utils/Constant";
import { DraggableData } from "@/Data/BonusUi/Rangeslider/RangeSliderData";

const Draggable = () => {
  return (
    <Col sm={12} xl={6}>
      <Card>
        <CommonHeader title={DraggableRange} subTitle={DraggableData} headClass="pb-0" />
        <CardBody>
          <Form className="theme-form form-label-align-right range-slider">
            <Row className="mb-0">
              <DraggableDemo />
            </Row>
          </Form>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Draggable;
