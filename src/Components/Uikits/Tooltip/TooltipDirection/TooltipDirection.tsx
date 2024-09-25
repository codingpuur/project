import { Fragment, useState } from "react";
import { Button, Card, CardBody, Col, Tooltip } from "reactstrap";
import { TooltipDirections, Tooltipontop } from "@/utils/Constant";
import CommonHeader from "@/Common/CommonHeader";
import { TooltipDirectionData, tooltipPosition } from "@/Data/Uikits/Tooltip/TooltipData";

const TooltipDirection = () => {
  const [open, setOpen] = useState(false);
  const [setId, setSetId] = useState("");
  const toggle = () =>  setOpen(!open);
  
  return (
    <Col md={6}>
      <Card className="tooltip-directions">
        <CommonHeader title={TooltipDirections} subTitle={TooltipDirectionData} />
        <CardBody>
          <div className="common-flex">
            <Button color="primary" className="mb-0 me-0" id={"primary1"} onMouseOver={() => setSetId("primary1") }>
                {Tooltipontop}
            </Button>
            <Tooltip isOpen={setId === "primary1" && true} placement="top" target={"primary1"} toggle={toggle} >
                {Tooltipontop}
            </Tooltip>
            {tooltipPosition &&
              tooltipPosition.map((item, index) => (
                <Fragment key={index}>
                  <Button color={item.class} className="mb-0 me-0" id={item.class + 1} onMouseOver={() => setSetId(item.class) }>
                    {item.text}
                  </Button>
                  <Tooltip isOpen={setId === item.class && true} placement={item.position} target={item.class + 1} toggle={toggle} >
                    {item.tooltip}
                  </Tooltip>
                </Fragment>
              ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default TooltipDirection;












// hello
