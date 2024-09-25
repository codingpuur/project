import { Fragment, useState } from "react";
import { Button, Card, CardBody, Col, Tooltip } from "reactstrap";
import { ColoredTooltips, Primary } from "@/utils/Constant";
import CommonHeader from "@/Common/CommonHeader";
import { ColoredTooltipTopData, colorTooltipData } from "@/Data/Uikits/Tooltip/TooltipData";

const ColoredTooltip = () => {
  const [open, setOpen] = useState(false);
  const [setId, setSetId] = useState("");
  const toggle = () => setOpen(!open) ;
  
  return (
    <Col md={6}>
      <Card>
        <CommonHeader title={ColoredTooltips} subTitle={ColoredTooltipTopData} headClass="pb-0"/>
        <CardBody>
          <div className="common-flex">
            <Button color="primary" className="mb-0 me-0" id="primary" onMouseOver={() => setSetId("primary")} >
              {Primary}
            </Button>
            <Tooltip isOpen={setId === "primary" && true} target="primary" toggle={toggle}>
              {Primary}
            </Tooltip>
            {colorTooltipData &&
              colorTooltipData.map((item, index) => (
                <Fragment key={index}>
                  <Button color={item.class} className="mb-0 me-0" id={item.class} onMouseOver={() => setSetId(item.class)} >
                    {item.text}
                  </Button>
                  <Tooltip isOpen={setId === item.class && true} target={item.class} toggle={toggle}>
                    {item.text}
                  </Tooltip>
                </Fragment>
              ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ColoredTooltip;
