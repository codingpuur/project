import { useState } from "react";
import { Href, InlineTooltipContent, Toolstip } from "@/utils/Constant";
import { Button, Tooltip } from "reactstrap";
import Link from "next/link";

const InlineTooltip = () => {
  const [open, setOpen] = useState(false);
  const [showId, setShowId] = useState<string>("");
  const toggle = () => {
    setOpen(!open);
  };
  return (
    <div>
      <h5 className="mb-1 py-4 pb-0">{InlineTooltipContent}</h5>
      <p className="mb-3">
        {" "}
        {"Here, is some content about tooltips that you can set the"}
        <Link href={Href} className="txt-primary fw-bold" id="Tooltip1" onMouseEnter={() =>  setShowId("Tooltip1")}>
          {" "}
          {Toolstip}
        </Link>{" "}
        {" .Tooltips helps you to add more and more content. A tooltip is often used to specify extra information about something when the user moves the mouse pointer over an element"}
        <Button color="success" id="Tooltip2" onMouseEnter={() => setShowId("Tooltip2")} className="text-white border-0 ms-1 px-3 py-1 me-0 mb-0">
          {"button"}
        </Button>
        {" .Tooltips helps you to add more and more content. A tooltip is often used to specify extra information about something when the user moves the mouse pointer over an element"}
      </p>
      <Tooltip isOpen={open === true && showId === "Tooltip1" && true} target="Tooltip1" toggle={toggle} >
        {"Popover text"}
      </Tooltip>
      <Tooltip isOpen={open === true && showId === "Tooltip2" && true} target="Tooltip2" toggle={toggle}>
        {"button"}
      </Tooltip>
    </div>
  );
};

export default InlineTooltip;
