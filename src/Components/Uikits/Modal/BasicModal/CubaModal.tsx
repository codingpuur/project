import { useState } from "react";
import { Button, Modal } from "reactstrap";
import { CionSIGNUP, OpenmodalforCion } from "@/utils/Constant";
import FormModalBody from "./FormModalBody";

const CionModal = () => {
  const [modal, setModal] = useState(false);
  const Toggle = () => {
    setModal(!modal);
  };
  return (
    <>
      <Button color='primary' onClick={() => setModal(true)}>
        {OpenmodalforCion}
      </Button>
      <Modal isOpen={modal} toggle={Toggle}>
        <div className='modal-toggle-wrapper social-profile custom-social-profile text-start dark-sign-up'>
          <h3 className='modal-header justify-content-center border-0'>{CionSIGNUP}</h3>
          <FormModalBody />
        </div>
      </Modal>
    </>
  );
};

export default CionModal;
