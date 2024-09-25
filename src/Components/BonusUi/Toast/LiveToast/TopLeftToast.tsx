import { Button, Toast, ToastBody, ToastHeader } from "reactstrap";
import { CionTheme, Toplefttoast } from "@/utils/Constant";
import { useState } from "react";
import { ImagePath } from "@/Constant";
import Image from "next/image";

const TopLeftToast = () => {
    const [open, setOpen] = useState(false);
    const toggle = () => {
      setOpen(true);
      setTimeout(() => {
        setOpen(false);
      }, 10000);
    };
  return (
    <>
        <Button color="warning" id="liveToastBtn2" onClick={toggle}>{Toplefttoast}</Button>
        <div className="toast-container position-fixed start-0 top-0 p-3 toast-index toast-rtl">
          <Toast fade isOpen={open}>
            <div className="toast-img toast-header">
              <Image className="rounded me-2" src={`${ImagePath}/dashboard-2/user/profile.png`} alt="profile" width={100} height={100}/>
              <strong className="me-auto">{CionTheme}</strong>
              <small className="text-nowrap">10 min ago</small>
              <Button close color="transperent" onClick={() => setOpen(false)}/>
            </div>
            <ToastBody className="toast-dark">
              <strong className="txt-success">Well done!</strong> You
              successfully read this important message.
            </ToastBody>
        </Toast>
      </div>
    </>
  );
};

export default TopLeftToast;
