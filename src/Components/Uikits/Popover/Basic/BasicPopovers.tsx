import { Button, PopoverBody,PopoverHeader, UncontrolledPopover} from "reactstrap";
import { Dismissiblepopover, HoverPopover } from "@/utils/Constant";

const BasicPopovers = () => {
  return (
    <>
      <UncontrolledPopover placement="bottom" trigger="hover" target="Popover2">
        <PopoverHeader>{HoverPopover}</PopoverHeader>
        <PopoverBody>{"Several utility instruction sets have been featured in the Bootstrap 4 to promote very easy learning for beginners in the business of web building."}</PopoverBody>
      </UncontrolledPopover>
      <Button color="secondary" className="example-popover" id="Popover3">
        {Dismissiblepopover}
      </Button>
      <UncontrolledPopover placement="right" trigger="focus" target="Popover3">
        <PopoverHeader>{Dismissiblepopover}</PopoverHeader>
        <PopoverBody>{"You are able to even develop and suggest improvements to the Bootstrap 4 before its final version is delivered."}</PopoverBody>
      </UncontrolledPopover>
    </>
  );
};

export default BasicPopovers;
