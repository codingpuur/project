import { Button, Toast, ToastBody, ToastHeader } from "reactstrap";
import FeatherIcons from "@/utils/CommonSvgIcon/FeatherIcons";
import { Oslotheme } from "@/utils/Constant";
import { useState } from "react";

const TranslucentToastFour = () => {
  const [open, setOpen] = useState(true);
  return (
    <Toast fade isOpen={open}>
      <div className="toast-header">
        <FeatherIcons className='toast-icons toast-success' iconName='Disc' />
        <strong className='me-auto'>{Oslotheme}</strong>
        <small className='text-muted text-nowrap'>just now</small>
        <Button close color='transperent' onClick={() => setOpen(false)} />
      </div>
      <ToastBody className='toast-dark'> Hello, I'm a penetration-tester.</ToastBody>
    </Toast>
  );
};

export default TranslucentToastFour;
