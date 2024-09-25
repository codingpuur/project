import { Button, Card, CardBody, Col, Toast, ToastBody } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import { ColorsScheme } from "@/utils/Constant";
import { useEffect, useState } from "react";
import { ColorsSchemesData } from "@/Data/BonusUi/Toast/ToastData";

const ColorsSchemes = () => {
  const [open, setOpen] = useState(true);
  useEffect(() => {
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
    }, 10000);
  }, []);

  return (
    <Col md={6}>
      <Card>
        <CommonHeader title={ColorsScheme} subTitle={ColorsSchemesData} headClass='pb-0' />
        <CardBody className='toast-rtl'>
          <Toast className='default-show-toast align-items-center text-light bg-warning border-0 fade show' fade isOpen={open}>
            <div className='d-flex justify-content-between align-items-center p-2'>
              <ToastBody>{"Your time over after 5 minute."}</ToastBody>
              <Button close className='btn-close-white me-2 m-auto' color='transperent' onClick={() => setOpen(false)}></Button>
            </div>
          </Toast>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ColorsSchemes;
