import { useState } from "react";
import { Button, Tooltip } from "reactstrap";
import CommonModal from "@/CommonElements/Ui-kits/CommonModal";
import { Popovermodal, TooltipButtontext, Tooltipspopovers, TriggerText } from "@/utils/Constant";
import TooltipLink from "./TooltipLink";

const TooltipModal = () => {
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const HandleToggle = () => setTooltipOpen(!tooltipOpen);
  const [modal, setModal] = useState(false);
  const toggle = () => {
    setModal(!modal);
  };
  const ModalData = {
    isOpen: modal,
    header: true,
    footer: true,
    toggler: toggle,
    class: "modal-dialog-centered",
    title: "Tooltip and Popover Modal",
  };
  return (
    <>
      <Button color="info" onClick={toggle}>
        {Tooltipspopovers}
      </Button>
      <CommonModal modalData={ModalData}>
        <h5>{Popovermodal}</h5>
        <p className="mt-2">
          {'This'}
          <Button className="popover-test" color="success" id="TooltipExample">
            {"Button"}
          </Button>
          {TriggerText}
          <Tooltip
            autohide={true}
            isOpen={tooltipOpen}
            target="TooltipExample"
            toggle={HandleToggle}
          >
            {TooltipButtontext}
          </Tooltip>
        </p>
        <hr />
        <TooltipLink />
      </CommonModal>
    </>
  );
};

export default TooltipModal;
