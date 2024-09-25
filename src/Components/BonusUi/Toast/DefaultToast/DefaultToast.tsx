import { Button, Card, CardBody, Col, Toast, ToastBody, ToastHeader } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import { CionTheme, DefaultToasts } from "@/utils/Constant";
import { useEffect, useState } from "react";
import { DefaultToastData } from "@/Data/BonusUi/Toast/ToastData";
import Image from "next/image";
import { ImagePath } from "@/Constant";

const DefaultToast = () => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
    }, 20000);
  }, []);

  return (
    <Col md={6}>
      <Card className='height-equal'>
        <CommonHeader headClass='pb-0' title={DefaultToasts} subTitle={DefaultToastData} />
        <CardBody className='toast-rtl'>
          <Toast fade isOpen={open}>
            <div className='toast-header toast-img'>
              <Image className='rounded me-2' src={`${ImagePath}/dashboard-2/user/profile.png`} alt='profile' height={100} width={100} />
              <strong className='me-auto'>{CionTheme}</strong>
              <small className='text-nowrap'>10 min ago</small>
              <Button close color='transperent' onClick={() => setOpen(false)} />
            </div>
            <ToastBody className='toast-dark'>
              <strong className='txt-success'>Well done!</strong> You successfully read this important message.
            </ToastBody>
          </Toast>
        </CardBody>
      </Card>
    </Col>
  );
};

export default DefaultToast;
