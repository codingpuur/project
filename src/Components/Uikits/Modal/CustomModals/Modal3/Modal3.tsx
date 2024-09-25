import { useState } from "react";
import { Button, Col } from "reactstrap";
import DotText from "../Modal1/DotText";
import { BalanceModal, ClickOut, Modal_3 } from "@/utils/Constant";
import CommonModal from "@/CommonElements/Ui-kits/CommonModal";
import Modal3Body from "./Modal3Body";
import Image from "next/image";
import { ImagePath } from "@/Constant";

const Modal3 = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => {
    setModal(!modal);
  };
  const ModalData = {
    isOpen: modal,
    class: "modal-dialog-centered",
    toggler: toggle,
    bodyClass: "p-0 ",
  };
  return (
    <Col xl={4} md={6} className='custom-alert text-center'>
      <div className='card-wrapper border rounded-3 h-100'>
        <div className='Cion-demo-img'>
          <DotText />
          <div className='title-wrapper pb-3 modal-heading'>
            <h5 className='theme-name mb-0'>
              <span>{Modal_3}</span>
              {BalanceModal}
            </h5>
            <p>{"Example of Cion dashboard balance card."}</p>
          </div>
          <div className='overflow-hidden balance-modal'>
            <Image className='img-fluid' src={`${ImagePath}/alert/balance.png`} alt='balance' height={234} width={429} />
            <Button color='primary' className='mx-auto mt-3' onClick={toggle}>
              {ClickOut}
            </Button>
          </div>
          <CommonModal modalData={ModalData}>
            <Modal3Body />
          </CommonModal>
        </div>
      </div>
    </Col>
  );
};

export default Modal3;
