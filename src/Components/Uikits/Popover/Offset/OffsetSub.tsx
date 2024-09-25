import { Button, Popover, PopoverBody, PopoverHeader } from "reactstrap";
import { PopoverOnLeft, Popoversoffset } from "@/utils/Constant";
import { useState } from "react";

const OffsetSub = () => {
  const [popover, setPopover] = useState(false);
  const Toggle = () => setPopover(!popover);
  return (
    <>
      <Button color="success" className="example-popover mb-0 me-0" id="Popover9" >
        {Popoversoffset}
      </Button>
      <Popover placement="left" isOpen={popover} target="Popover9" toggle={Toggle} offset={[-50, 0]} >
        <PopoverHeader>{PopoverOnLeft}</PopoverHeader>
        <PopoverBody>{"Popovers are opt-in for effectiveness causes, in this way you have to initialize them yourself."}</PopoverBody>
      </Popover>
    </>
  );
};

export default OffsetSub;
