import { useState } from "react";
import { Button, Card,CardBody,Col,Popover,PopoverBody,PopoverHeader} from "reactstrap";
import { BasicPopover, Hovertooltip, HurryUp } from "@/utils/Constant";
import BasicPopovers from "./BasicPopovers";
import CommonHeader from "@/Common/CommonHeader";
import { BasicPopoverData } from "@/Data/Uikits/Popover/PopoverData";

const Basic = () => {
  const [popover, setPopover] = useState(false);
  const Toggle = () => setPopover(!popover);
  return (
    <Col sm={12}>
      <Card>
        <CommonHeader title={BasicPopover} subTitle={BasicPopoverData} headClass="card-no-border pb-0" />
        <CardBody className="common-flex popover-wrapper">
            <Button color="primary" className="example-popover" id="Popover1">
               {HurryUp}
            </Button>
            <Popover placement="top" isOpen={popover} target="Popover1" toggle={Toggle} >
              <PopoverHeader>{BasicPopover}</PopoverHeader>
              <PopoverBody>
                {"If the package restore doesn't help, you can look at the Output window in the Visual Studio."}
              </PopoverBody>
            </Popover>
            <Button color="success" className="example-popover" id="Popover2">
              {Hovertooltip}
            </Button>
            <BasicPopovers />
        </CardBody>
      </Card>
    </Col>
  );
};

export default Basic;
