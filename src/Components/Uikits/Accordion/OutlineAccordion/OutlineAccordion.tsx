import { Card, CardBody, Col } from "reactstrap";
import { OutlineAccordions } from "@/utils/Constant";
import OutlineDemo from "./OutlineDemo";
import CommonHeader from "@/Common/CommonHeader";
import { OutlineAccordionData } from "@/Data/Uikits/Accordion/AccordionData";

const OutlineAccordion = () => {
  return (
    <Col xl={6} sm={12}>
      <Card>
        <CommonHeader title={OutlineAccordions} subTitle={OutlineAccordionData} headClass='pb-0'/>
        <CardBody>
          <div className="outline-accordion">
            <OutlineDemo />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default OutlineAccordion;
