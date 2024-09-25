import { Col, Row } from "reactstrap";
import { Onecolumns, Twocolumns } from "@/utils/Constant";

const VerticalStart = () => {
  return (
    <Col lg={4}>
      <Row className="grid-vertical align-items-start m-1 g-2">
        <Col xs={6}>
          <span>{Onecolumns}</span>
        </Col> 
        <Col xs={6}>
          <span>{Twocolumns}</span>
        </Col>
      </Row>
    </Col>
  );
};

export default VerticalStart;
