import { Card, CardBody, Col } from "reactstrap";
import { SimpleAccordions } from "@/utils/Constant";
import SimpleDemo from "./SimpleDemo";
import CommonHeader from "@/Common/CommonHeader";
import { SimpleAccordionData } from "@/Data/Uikits/Accordion/AccordionData";

const SimpleAccordion = () => {
  return (
    <Col sm={12} xl={6}>
      <Card className="height-equal">
        <CommonHeader title={SimpleAccordions} subTitle={SimpleAccordionData} headClass='pb-0'/>
        <CardBody>
          <div className="simple-Accordion">
            <SimpleDemo />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default SimpleAccordion;
