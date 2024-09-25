import { useState } from "react";
import { And, HoverText, Href, Thatlink, Thislink, Tooltipsmodal } from "@/utils/Constant";
import { Tooltip } from "reactstrap";
import Link from "next/link";

const TooltipLink = () => {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);

  const openSet = () => {
    setOpen(!open);
  };
  const openSet1 = () => {
    setOpen1(!open1);
  };
  return (
    <>
      <h5>{Tooltipsmodal}</h5>
      <p className='mt-2 mb-0'>
        <Link className='tooltip-test text-info' href={Href} id='Tooltip11'>
          {Thislink}
        </Link>
        {And}
        <Tooltip autohide={true} isOpen={open} target='Tooltip11' toggle={openSet}>
          {"Tooltip"}
        </Tooltip>
        <Link className='tooltip-test text-info' href={Href} id='Tooltip12'>
          {Thatlink}
        </Link>
        {HoverText}
        <Tooltip autohide={true} isOpen={open1} target='Tooltip12' toggle={openSet1}>
          {"Tooltip"}
        </Tooltip>
      </p>
    </>
  );
};

export default TooltipLink;
