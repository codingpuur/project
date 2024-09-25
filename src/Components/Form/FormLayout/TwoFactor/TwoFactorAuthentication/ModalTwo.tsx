import { useState } from 'react';
import { Button, Form, Input, Modal, ModalBody, ModalHeader } from 'reactstrap';
import { ScanQRcode, Submit } from '@/utils/Constant';
import { ModalTwoPropsType } from '@/Types/FormLayoutTypes';
import Image from 'next/image';
import { ImagePath } from '@/Constant';

const ModalTwo:React.FC<ModalTwoPropsType> = ({ modalTwo, toggleTwo }) => {
  const [active, setActive] = useState<boolean>(true);
  return (
    <Modal centered isOpen={modalTwo} toggle={toggleTwo}>
      <ModalHeader toggle={toggleTwo}><h3>{ScanQRcode}</h3></ModalHeader>
      <ModalBody className="main-qr-code">
        <div className="modal-toggle-wrapper">
          <p>{"Scan the QR code using an authenticator app and website such as abc authenticator, OTP xyz, or pqr authenticator. You must input the six-digit code it generates below."}</p>
          <div className="modal-img">
            <div className="qr-img">
              <Image width={100} height={100} src={`${ImagePath}/forms/qr-code.png`} alt="qr-code"/>
            </div>
            <div className="qr-content">
              <div className={`alert alert-light-dark light alert-dismissible fade text-dark border-left-wrapper ${ active ? "show" : "d-none"}`} role="alert">
                <i className="fa fa-exclamation-triangle" />
                <div>
                  <span>{"If your qr code is not working then enter this code in your input field."}</span>
                  <span className="f-w-500">
                    TYU78DE29OLAAWCVNTYFGESWQ31098QW
                  </span>
                </div>
                <Button close onClick={() => {setActive(false)}}/>
              </div>
            </div>
          </div>
          <Form onSubmit={(event) => event.preventDefault()} className="needs-validation" noValidate>
            <Input type="text" required placeholder="Enter QR Code" />
          </Form>
          <Button color="primary">{Submit}</Button>
        </div>
      </ModalBody>
    </Modal>
  )
}

export default ModalTwo