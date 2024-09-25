import { Card, CardBody, Col } from "reactstrap";
import { WithIconsAccordion } from "@/utils/Constant";
import IconDemo from "./IconDemo";
import CommonHeader from "@/Common/CommonHeader";
import { IconAccordionData } from "@/Data/Uikits/Accordion/AccordionData";

const IconAccordion = () => {
  return (
    <Col xl={6} sm={12}>
      <Card className="custom-accordion-with-icons">
        <CommonHeader title={WithIconsAccordion} subTitle={IconAccordionData} headClass='pb-0'/>
        <CardBody>
          <div className="icon-accordion">
            <IconDemo />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default IconAccordion;
