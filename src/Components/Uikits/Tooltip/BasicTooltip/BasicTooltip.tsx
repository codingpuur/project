import { useState } from "react";
import { Button, Card, CardBody, Col, Tooltip } from "reactstrap";
import { BasicTooltipText, BasicTooltips, SurpriseText } from "@/utils/Constant";
import InlineTooltip from "./InlineTooltip";
import CommonHeader from "@/Common/CommonHeader";
import { BasicTooltipData } from "@/Data/Uikits/Tooltip/TooltipData";

const BasicTooltip = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };
  
  return (
    <Col sm={12}>
      <Card>
        <CommonHeader title={BasicTooltips} subTitle={BasicTooltipData} headClass="pb-0"/>
        <CardBody>
          <Button color="primary" className="example-popover mb-0 me-0" id="TooltipExample" title="Surprise!!! Thank you for hovering..." >
            {BasicTooltipText}
          </Button>
          <Tooltip isOpen={open} target="TooltipExample" toggle={toggle}>
            {SurpriseText}
          </Tooltip>
          <InlineTooltip />
        </CardBody>
      </Card>
    </Col>
  );
};

export default BasicTooltip;
