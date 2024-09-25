import { Onecolumn, Twocolumn } from "@/utils/Constant";
import { Col, Row } from "reactstrap";

const HorizontalStart = () => {
  return (
    <Row className="justify-content-start bg-light">
      <Col xs={5}>
        <span className="text-dark">{Onecolumn}</span>
      </Col>
      <Col xs={5}>
        <span className="text-dark">{Twocolumn}</span>
      </Col>
    </Row>
  );
};

export default HorizontalStart;
