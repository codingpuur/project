import { useState } from "react";
import { Button } from "reactstrap";
import { Cancel, Connectnewaccount, Openfirstmodal, RemoveaccountText } from "@/utils/Constant";
import CommonModal from "@/CommonElements/Ui-kits/CommonModal";
import OtherModal from "./OtherModal";
import { ImagePath } from "@/Constant";
import Image from "next/image";

const ToggleModalBody = () => {
  const [open, setOpen] = useState(false);
  const [modal, setModal] = useState(false);
  const toggle = () => {
    setModal(!modal);
  };
  const toggle2 = () => {
    setOpen(!open);
  };
  const ModalData = {
    isOpen: modal,
    class: "modal-dialog-centered",
    toggler: toggle,
  };
  return (
    <>
      <Button color='dark' onClick={toggle}>
        {Openfirstmodal}
      </Button>
      <CommonModal modalData={ModalData}>
        <div className='modal-toggle-wrapper'>
          <ul className='modal-img'>
            <li>
              <Image src={`${ImagePath}/gif/whatapp.gif`} alt='whatsapp' width={100} height={100} />
            </li>
            <li>
              <Image src={`${ImagePath}/gif/instagram.gif`} alt='instagram' width={100} height={100} />
            </li>
            <li>
              <Image src={`${ImagePath}/gif/facebook.gif`} alt='facebook' width={100} height={100} />
            </li>
          </ul>
          <h6>{RemoveaccountText}</h6>
          <Button color='dark' className='rounded-pill w-100 mt-4' onClick={toggle2}>
            {Connectnewaccount}
          </Button>
          <Button color='normal' className='rounded-pill w-100 dark-toggle-btn' onClick={toggle}>
            {Cancel}
          </Button>
        </div>
      </CommonModal>
      <OtherModal modal={open} toggle={toggle2} />
    </>
  );
};

export default ToggleModalBody;
