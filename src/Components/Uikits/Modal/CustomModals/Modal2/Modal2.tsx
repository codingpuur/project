import { useState } from "react";
import { Button, Col } from "reactstrap";
import DotText from "../Modal1/DotText";
import { ClickOut, Modal_2, ResultModal, ResultText } from "@/utils/Constant";
import CommonModal from "@/CommonElements/Ui-kits/CommonModal";
import Modal2Body from "./Modal2Body";
import Image from "next/image";
import { ImagePath } from "@/Constant";

const Modal2 = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => {
    setModal(!modal);
  };
  const ModalData = {
    isOpen: modal,
    class: "modal-dialog-centered",
    toggler: toggle,
    bodyClass: "social-profile text-start custom-social-profile",
  };
  return (
    <Col xl={4} md={6} className=' custom-alert text-center'>
      <div className='card-wrapper border rounded-3 h-100'>
        <div className='Cion-demo-img'>
          <DotText />
          <div className='title-wrapper pb-3 modal-heading'>
            <h5 className='theme-name mb-0'>
              <span>{Modal_2}</span>
              {ResultModal}
            </h5>
            <p>{ResultText}</p>
          </div>
          <div className='overflow-hidden'>
            <Image className='img-fluid' src={`${ImagePath}/alert/learning.png`} alt='learning' height={234} width={429} />
            <Button color='primary' className='mx-auto mt-3' onClick={toggle}>
              {ClickOut}
            </Button>
          </div>
          <CommonModal modalData={ModalData}>
            <Modal2Body toggle={toggle} />
          </CommonModal>
        </div>
      </div>
    </Col>
  );
};

export default Modal2;
