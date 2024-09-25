import { Col, Row } from "reactstrap";
import LeftBar from "./LeftBar";
import NewUserClass from "./NewUserClass/NewUserClass";
import RightBar from "./RightBar/RightBar";

const TimelineTab = () => {
  return (
    <Row>
      <Col className='xl-40 box-col-30' lg={12} md={5} xl={3}>
        <div className='default-according style-1 faq-accordion job-accordion'>
          <Row>
            <LeftBar />
          </Row>
        </div>
      </Col>
      <Col className='xl-60 box-col-40' lg={12} md={7} xl={6}>
        <Row>
          <NewUserClass />
        </Row>
      </Col>
      <Col className='xl-100 box-col-30' xl={3}>
        <div className='default-according style-1 faq-accordion job-accordion'>
          <Row>
            <RightBar />
          </Row>
        </div>
      </Col>
    </Row>
  );
};

export default TimelineTab;
