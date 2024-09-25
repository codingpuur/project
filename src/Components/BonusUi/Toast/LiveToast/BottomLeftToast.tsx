import { useState } from "react";
import { Button, Toast, ToastBody, ToastHeader } from "reactstrap";
import { Bottomlefttoast, CionTheme, RemoveMyAccount } from "@/utils/Constant";
import { ImagePath } from "@/Constant";
import Image from "next/image";

const BottomLeftToast = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
    }, 3000);
  };
  return (
    <>
      <Button color='success' id='liveToastBtn3' onClick={toggle}>
        {Bottomlefttoast}
      </Button>
      <div className='toast-container position-fixed start-0 bottom-0 p-3 toast-index toast-rtl'>
        <Toast fade isOpen={open}>
          <div className='toast-img toast-header'>
            <Image className='rounded me-2' src={`${ImagePath}/dashboard-2/user/profile.png`} alt='profile' height={100} width={100} />
            <strong className='me-auto'>{CionTheme}</strong>
            <Button close color='transperent' onClick={() => setOpen(false)} />
          </div>
          <ToastBody className='toast-dark'>
            <h6 className='mb-2'>Your account will be permanently deleted?</h6>
            <p className='mb-0'>Do you intend to continue?</p>
            <div className='mt-2 pt-2 border-top d-flex gap-2'>
              <Button color='dark' size='sm'>
                I'm not sure
              </Button>
              <Button color='danger' size='sm' onClick={() => setOpen(false)}>
                {RemoveMyAccount}
              </Button>
            </div>
          </ToastBody>
        </Toast>
      </div>
    </>
  );
};

export default BottomLeftToast;
