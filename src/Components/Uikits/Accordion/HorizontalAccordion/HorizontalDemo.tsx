import { Card, CardBody, Col, Collapse, Row } from "reactstrap";

const HorizontalDemo:React.FC<{ open: boolean }> = ({ open }) => {
  return (
    <Row>
      <Col sm={5}>
        <Collapse isOpen={open} className={`mt-3`} horizontal>
          <Card>
            <CardBody className="bg-secondary-light accordion-h-space mb-0">
              {"The collapse plugin also supports horizontal collapsing.Add the.collapse - horizontal modifier class to transition the width instead of height and set a width on the immediate child element.Feel free to write your own custom Sass, use inline styles, or use our width utilities."}
            </CardBody>
          </Card>
        </Collapse>
      </Col>
    </Row>
  );
};

export default HorizontalDemo;
