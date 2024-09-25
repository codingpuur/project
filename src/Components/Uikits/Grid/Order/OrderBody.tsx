import { gridBorderBodyData } from "@/Data/Uikits/Grid/GridData";
import { Col, Row } from "reactstrap";

const OrderBody = () => {
  return (
    <Row className="g-2">
      {gridBorderBodyData &&
        gridBorderBodyData.map((item, index) => (
          <Col className={item.class} key={index}>
            <span>{item.text}</span>
          </Col>
        ))}
    </Row>
  );
};

export default OrderBody;
