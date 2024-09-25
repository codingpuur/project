import { Button, Card, CardBody, Col, Popover, PopoverBody, PopoverHeader } from "reactstrap";
import { PopoverDirections, PopoverOnTop } from "@/utils/Constant";
import { useState } from "react";
import PopoverDirectionSub from "./PopoverDirectionSub";
import CommonHeader from "@/Common/CommonHeader";
import { PopoverDirectionData, popoverData } from "@/Data/Uikits/Popover/PopoverData";

const PopoverDirection = () => {
  const [popover, setPopover] = useState(false);
  const Toggle = () => setPopover(!popover);
  return (
    <Col sm={12}>
      <Card>
        <CommonHeader headClass="card-no-border pb-0" title={PopoverDirections} subTitle={PopoverDirectionData} />
        <CardBody className="common-flex popover-wrapper">
          <Button color="warning" className="example-popover mb-0 me-0" id="Popover4">
            {PopoverOnTop}
          </Button>
          <Popover placement="top" isOpen={popover} target="Popover4" toggle={Toggle} >
            <PopoverHeader>{PopoverOnTop}</PopoverHeader>
            <PopoverBody>
              {"Popovers need the tooltip plugin considering that a dependency."}
            </PopoverBody>
          </Popover>
          {popoverData.map((data,index) => (
            <PopoverDirectionSub data={data} key={index} />
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default PopoverDirection;
