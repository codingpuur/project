import { Button, Card, CardBody, Col, Popover, PopoverBody, PopoverHeader } from "reactstrap";
import { PopoverOffset, Popoveroffset, Popovertitle } from "@/utils/Constant";
import { useState } from "react";
import OffsetSub from "./OffsetSub";
import CommonHeader from "@/Common/CommonHeader";
import { OffsetPopoverData } from "@/Data/Uikits/Popover/PopoverData";

const Offset = () => {
  const [popover, setPopover] = useState(false);
  const Toggle = () => setPopover(!popover);
  return (
    <Col sm={12}>
      <Card>
        <CommonHeader subTitle={OffsetPopoverData} title={PopoverOffset} headClass="card-no-border pb-0"/>
        <CardBody className="common-flex popover-wrapper">
          <Button color="secondary" className="mb-0 me-0" id="Popover8">
            {Popoveroffset}
          </Button>
          <Popover placement="right" isOpen={popover} target="Popover8" toggle={Toggle} offset={[50, 0]}>
            <PopoverHeader>{Popovertitle}</PopoverHeader>
            <PopoverBody>{"And here's some amazing content. It's very engaging. Right?"}</PopoverBody>
          </Popover>
          <OffsetSub />
        </CardBody>
      </Card>
    </Col>
  );
};

export default Offset;
