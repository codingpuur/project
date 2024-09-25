import { CollapsePropsType } from "@/Types/uikitsType";
import { Card, CardBody, Col, Collapse, Row } from "reactstrap";

const CollapesBody: React.FC<CollapsePropsType> = ({ collapesId }) => {
  return (
    <Row>
      <Col xl={6}>
        <Collapse className={`multi-collapse dark-accordion ${collapesId.collapes1 && "show"}`}>
          <Card>
            <CardBody className='mt-3 mb-0 collapse-wrapper accordion-light-primary rounded-4'>{"The collapse JavaScript plugin is used to show and hide content.Buttons or anchors are used as triggers that are mapped to specific elements you toggle.Collapsing an element will animate the height from it's current value to 0. Given how CSS handles animations, you cannot use padding on a collapse element.Instead, use the class as an independent wrapping element."}</CardBody>
          </Card>
        </Collapse>
      </Col>
      <Col xl={6}>
        <Collapse className={`multi-collapse dark-accordion ${collapesId.collapes2 && "show"}`}>
          <Card>
            <CardBody className='mt-3 mb-0 collapse-wrapper accordion-light-warning rounded-4'>{"This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element.These classes control the overall appearance,  well as the showing and hiding via CSS transitions.You can modify any of this with custom CSS or overriding our default variables."}</CardBody>
          </Card>
        </Collapse>
      </Col>
    </Row>
  );
};

export default CollapesBody;
