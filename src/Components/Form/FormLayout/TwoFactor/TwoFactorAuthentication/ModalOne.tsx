import { ChangeEvent, useState } from 'react';
import { Button, FormGroup, Input, Label, Modal, ModalBody, ModalHeader } from 'reactstrap'
import { Cancel, Next, TwoFactorAuthenticationHeading } from '@/utils/Constant';
import ModalTwo from './ModalTwo';
import { ModalOnePropsType } from '@/Types/FormLayoutTypes';
import { modalOneData } from '@/Data/Form/FormLayout/FormWizardData';

const ModalOne:React.FC<ModalOnePropsType> = ({ toggle, modalOne }) => {
  const [selectAuthenticatorMethodName, setSelectAuthenticatorMethodName] = useState("");
  const [modalTwo, setModalTwo] = useState(false);
  const toggleTwo = () => setModalTwo(!modalTwo);
  const getValue = (event: ChangeEvent<HTMLInputElement>) => {
    let value = event.target.value;
    setSelectAuthenticatorMethodName(value);
  };
  const handleNextButton = () => {
    if (selectAuthenticatorMethodName !== "") {
      toggleTwo();
      toggle();
    }  
  };
  return (
    <>
      <Modal centered isOpen={modalOne} toggle={toggle}>
        <ModalHeader toggle={toggle}><h3>{TwoFactorAuthenticationHeading}</h3></ModalHeader>
        <ModalBody>
          <div className="modal-toggle-wrapper">
            <p>{"To log into your account, youll also need to enter your username, password, and a code that was sent to you through SMS or an app."}</p>
            <div className="authentication-options">
              <FormGroup check className="radio radio-primary ps-0">
                <ul className="radio-wrapper">
                  {modalOneData.map((data, index) => (
                    <li key={index}>
                      <Input onChange={getValue}  id={data.tittle} type="radio" name="selectAuthenticatorMethodName" checked={selectAuthenticatorMethodName === data.tittle} value={data.tittle}/>
                      <Label className="form-check-label mb-0" htmlFor={data.tittle}>
                        <i className={`fa ${data.iconClassName}`} />
                        <span className="d-flex flex-column"><span>{data.tittle}</span><span>{data.description}</span></span>
                      </Label>
                    </li>
                  ))}
                </ul>
              </FormGroup>
            </div>
            <Button color="dark" className="rounded-pill w-100 mt-3" onClick={handleNextButton}>{Next}</Button>
            <Button color="transparent" className="rounded-pill w-100 pb-0 dark-toggle-btn" onClick={toggle}>{Cancel}</Button>
          </div>
        </ModalBody>
      </Modal>
      <ModalTwo modalTwo={modalTwo} toggleTwo={toggleTwo} />
    </>
  )
}

export default ModalOne