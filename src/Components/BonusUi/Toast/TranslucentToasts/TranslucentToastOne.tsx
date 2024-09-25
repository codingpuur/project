import { useEffect, useState } from "react";
import { Button, Toast, ToastBody, ToastHeader } from "reactstrap";
import { CionTheme } from "@/utils/Constant";
import FeatherIcons from "@/utils/CommonSvgIcon/FeatherIcons";

const TranslucentToastOne = () => {
  const [open, setOpen] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setOpen(false);
    }, 3000);
  }, []);
  return (
    <Toast fade isOpen={open}>
      <div className='toast-header'>
        <FeatherIcons className='toast-icons toast-info' iconName='Disc' />
        <strong className='me-auto'>{CionTheme}</strong>
        <small className='text-muted text-nowrap'>11 mins ago</small>
        <Button close color='transperent' onClick={() => setOpen(false)} />
      </div>
      <ToastBody className='toast-dark'> Hello, I'm a web-designer.</ToastBody>
    </Toast>
  );
};

export default TranslucentToastOne;
