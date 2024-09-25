import { useState } from "react";
import { Button, Toast, ToastBody, ToastHeader } from "reactstrap";
import FeatherIcons from "@/utils/CommonSvgIcon/FeatherIcons";
import { Roxotheme } from "@/utils/Constant";

const StackingToastTwo = () => {
  const [open, setOpen] = useState(true);
  return (
    <Toast fade isOpen={open}>
      <div className="toast-header">
        <FeatherIcons className='toast-icons toast-warning' iconName='Bell' />
        <strong className='me-auto'>{Roxotheme}</strong>
        <small className='text-muted text-nowrap'>2 sec ago</small>
        <Button close color='transperent' onClick={() => setOpen(false)} />
      </div>
      <ToastBody className='toast-dark'>Hello, I'm a UX-designer.</ToastBody>
    </Toast>
  );
};

export default StackingToastTwo;
