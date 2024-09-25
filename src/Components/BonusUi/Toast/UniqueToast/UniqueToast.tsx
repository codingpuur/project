import { Button, Card, CardBody, Col, Toast, ToastBody, ToastHeader } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import { CionTheme, RemoveMyAccount, ToastBody1, UniqueToasts } from "@/utils/Constant";
import { useEffect, useState } from "react";
import Image from "next/image";
import { ImagePath } from "@/Constant";
import { UniqueToastData } from "@/Data/BonusUi/Toast/ToastData";

const UniqueToast = () => {
  const [open, setOpen] = useState(false);
    useEffect(() => {
      setOpen(true);
      setTimeout(() => {
        setOpen(false);
      }, 10000);
    },[]);
   
  return (
    <Col md={6}>
      <Card className="height-equal">
        <CommonHeader headClass="pb-0" title={UniqueToasts} subTitle={UniqueToastData}/>
        <CardBody className="toast-rtl">
          <Toast fade isOpen={open}>
            <div className="toast-img toast-header">
              <Image className="rounded me-2" src={`${ImagePath}/dashboard-2/user/profile.png`} alt="profile" height={100} width={100}/>
              <strong className="me-auto">{CionTheme}</strong>
              <Button close color="transperent" onClick={() => setOpen(false)}/>
            </div>
            <ToastBody className="toast-dark">
              <h6 className="mb-2"> {ToastBody1}</h6>
              <p className="mb-0">Do you intend to continue?</p>
              <div className="mt-2 pt-2 border-top d-flex gap-2">
                <Button color="dark" size="sm">
                  I'm not sure
                </Button>
                <Button color="danger" size="sm" onClick={() => setOpen(false)}>
                  {RemoveMyAccount}
                </Button>
              </div>
            </ToastBody>
          </Toast>
        </CardBody>
      </Card>
    </Col>
  );
};

export default UniqueToast;
