import { Button, Toast, ToastBody, ToastHeader } from "reactstrap";
import FeatherIcons from "@/utils/CommonSvgIcon/FeatherIcons";
import { useState } from "react";
import { Fastkarttheme } from "@/utils/Constant";

const TranslucentToastThree = () => {
    const [open, setOpen] = useState(true);
  return (
    <Toast fade isOpen={open}>
      <div className="toast-header">
        <FeatherIcons className="toast-icons toast-secondary" iconName="Disc" />
        <strong className="me-auto">{Fastkarttheme}</strong>
        <small className="text-muted text-nowrap">just now</small>
        <Button close color="transperent" onClick={() => setOpen(false)}/>
      </div>
      <ToastBody className="toast-dark"> Hello, I'm a UX-designer.</ToastBody>
    </Toast>
  );
};

export default TranslucentToastThree;
