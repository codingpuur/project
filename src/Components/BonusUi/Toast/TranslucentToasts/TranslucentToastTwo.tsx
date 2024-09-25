import { useState } from "react";
import { Button, Toast, ToastBody, ToastHeader } from "reactstrap";
import FeatherIcons from "@/utils/CommonSvgIcon/FeatherIcons";
import { Kohotheme } from "@/utils/Constant";

const TranslucentToastTwo = () => {
  const [open, setOpen] = useState(true);
  return (
    <Toast fade isOpen={open}>
      <div className="toast-header">
        <FeatherIcons className="toast-icons toast-dark" iconName="Disc" />
        <strong className="me-auto">{Kohotheme}</strong>
        <small className="text-muted text-nowrap">1 sec ago</small>
        <Button close color="transperent" onClick={() => setOpen(false)}/>
      </div>
      <ToastBody className="toast-dark"> Hello, I'm a full-stack developer.</ToastBody>
    </Toast>
  );
};

export default TranslucentToastTwo;
