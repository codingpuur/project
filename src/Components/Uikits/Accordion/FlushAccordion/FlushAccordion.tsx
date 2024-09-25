import { Card, CardBody, Col } from "reactstrap";
import { FlushAccordions } from "@/utils/Constant";
import FlushDemo from "./FlushDemo";
import CommonHeader from "@/Common/CommonHeader";
import { FlushAccordionData } from "@/Data/Uikits/Accordion/AccordionData";

const FlushAccordion = () => {
  return (
    <Col sm={12} xl={6}>
      <Card className='height-equal'>
        <CommonHeader title={FlushAccordions} subTitle={FlushAccordionData} headClass='pb-0' />
        <CardBody>
          <div className='Flush-Accordion'>
            <FlushDemo />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default FlushAccordion;
