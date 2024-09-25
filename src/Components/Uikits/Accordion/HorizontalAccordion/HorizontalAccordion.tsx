import { useState } from "react";
import { Button, Card, CardBody, Col } from "reactstrap";
import { HorizontalAccordions, Togglewidthcollapse } from "@/utils/Constant";
import HorizontalDemo from "./HorizontalDemo";
import CommonHeader from "@/Common/CommonHeader";
import { HorizontalAccordionData } from "@/Data/Uikits/Accordion/AccordionData";

const HorizontalAccordion = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);
  return (
    <Col md={6} sm={12}>
      <Card>
        <CommonHeader title={HorizontalAccordions} subTitle={HorizontalAccordionData} headClass='pb-0' />
        <CardBody>
          <div className='common-flex'>
            <Button color='secondary' onClick={toggle}>
              {Togglewidthcollapse}
            </Button>
          </div>
          <HorizontalDemo open={open} />
        </CardBody>
      </Card>
    </Col>
  );
};

export default HorizontalAccordion;
