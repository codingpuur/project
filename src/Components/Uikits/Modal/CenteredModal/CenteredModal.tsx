import { useState } from "react";
import { Button, Card, CardBody, Col } from "reactstrap";
import { CenteredModals, Verticallycentered } from "@/utils/Constant";
import CenterdModalBody from "./CenterdModalBody";
import CommonHeader from "@/Common/CommonHeader";
import { CenteredModalData } from "@/Data/Uikits/Model/ModalData";

const CenteredModal = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => {
    setModal(!modal);
  };

  return (
    <Col xl={4}>
      <Card>
        <CommonHeader title={CenteredModals} subTitle={CenteredModalData} headClass='pb-0' />
        <CardBody>
          <Button color='success' onClick={toggle}>{Verticallycentered}</Button>
          <CenterdModalBody modal={modal} toggle={toggle} />
        </CardBody>
      </Card>
    </Col>
  );
};

export default CenteredModal;
