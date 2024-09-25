import { useState } from "react";
import { Button, Col } from "reactstrap";
import { ClickOut, Modal_1, ProfileModal } from "@/utils/Constant";
import CommonModal from "@/CommonElements/Ui-kits/CommonModal";
import DotText from "./DotText";
import Modal1Body from "./Modal1Body";
import Image from "next/image";
import { ImagePath } from "@/Constant";

const Modal1 = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => {
    setModal(!modal);
  };
  const ModalData = {
    isOpen: modal,
    class: "modal-dialog-centered",
    toggler: toggle,
    bodyClass: "p-0",
  };
  return (
    <Col xl={4} md={6} className='custom-alert text-center'>
      <div className='card-wrapper border rounded-3 h-100'>
        <div className='Cion-demo-img'>
          <DotText />
          <div className='title-wrapper pb-3 modal-heading'>
            <h5 className='theme-name mb-0'>
              <span>{Modal_1}</span>
              {ProfileModal}
            </h5>
            <p>{"Example of Cion dashboard profile card."}</p>
          </div>
          <div className='overflow-hidden'>
            <Image className='img-fluid' src={`${ImagePath}/alert/social.png`} alt='learning' height={234} width={429} />
            <Button color='primary' className='mx-auto mt-3' onClick={toggle}>{ClickOut}</Button>
          </div>
          <CommonModal modalData={ModalData}>
            <Modal1Body setmodal={modal}/>
          </CommonModal>
        </div>
      </div>
    </Col>
  );
};

export default Modal1;
