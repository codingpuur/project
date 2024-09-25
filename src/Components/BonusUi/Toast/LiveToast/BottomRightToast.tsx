import { Button, Toast, ToastBody } from "reactstrap";
import { Bottomrighttoast, BottomrighttoastDetails } from "@/utils/Constant";
import { useState } from "react";

const BottomRightToast = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
    }, 5000);
  };
  return (
    <>
      <Button color='secondary' id='liveToastBtn1' onClick={toggle}>
        {Bottomrighttoast}
      </Button>
      <div className='toast-container position-fixed bottom-0 end-0 p-3 toast-index toast-rtl'>
        <Toast fade isOpen={open}>
          <div className='d-flex justify-content-between alert-secondary align-items-center'>
            <ToastBody>{BottomrighttoastDetails}</ToastBody>
            <Button close className='btn-close-white me-2 m-auto' color='transperent' onClick={() => setOpen(false)}></Button>
          </div>
        </Toast>
      </div>
    </>
  );
};

export default BottomRightToast;
