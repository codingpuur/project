import { Button, Popover, PopoverBody, PopoverHeader } from "reactstrap";
import { useState } from "react";
import { PopoverDataTypes } from "@/Data/Uikits/Popover/PopoverData";
interface PropsTypes {
  data:PopoverDataTypes
}
const PopoverDirectionSub = ({data}:PropsTypes) => {
  const [popover, setPopover] = useState(false);
  const Toggle = () => setPopover(!popover);
  return (
    <>
      <Button color={data.color} className="example-popover mb-0 me-0" id={data.id}>
        {data.title}
      </Button>
      <Popover placement={data.placements} isOpen={popover} target={data.id} toggle={Toggle} >
        <PopoverHeader>{data.title}</PopoverHeader>
        <PopoverBody>{data.description}</PopoverBody>
      </Popover>
    </>
  );
};

export default PopoverDirectionSub;
