import { useState } from "react";
import { Button, Card, CardBody, Col } from "reactstrap";
import CommonModal from "@/CommonElements/Ui-kits/CommonModal";
import { CionLogin, StaticBackdropModal, Staticbackdropmodal } from "@/utils/Constant";
import StaticModalForm from "./StaticModalForm";
import CommonHeader from "@/Common/CommonHeader";
import { StaticModalData } from "@/Data/Uikits/Model/ModalData";

const StaticModal = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => {
    setModal(!modal);
  };
  const ModalData = {
    isOpen: modal,
    toggler: toggle,
    bodyClass: "social-profile text-start p-3 custom-social-profile",
  };

  return (
    <Col xl={4}>
      <Card>
        <CommonHeader title={StaticBackdropModal} subTitle={StaticModalData} headClass='pb-0' />
        <CardBody>
          <Button color='primary' onClick={toggle}>
            {Staticbackdropmodal}
          </Button>
          <CommonModal modalData={ModalData}>
            <div className='modal-toggle-wrapper'>
              <h3>{CionLogin}</h3>
              <p>{"Fill in your information below to continue."}</p>
              <StaticModalForm toggle={toggle} />
            </div>
          </CommonModal>
        </CardBody>
      </Card>
    </Col>
  );
};

export default StaticModal;
