import Image from "next/image";
import CommonModal from "@/CommonElements/Ui-kits/CommonModal";
import { Alreadyleaving, Href, LogoutText, Notamember, Register, YesLogout } from "@/utils/Constant";
import { Button } from "reactstrap";
import { ImagePath } from "@/Constant";
import Link from "next/link";
import { ModelPropsType } from "@/Types/ModelTypes";

const OtherModal: React.FC<ModelPropsType> = ({ modal, toggle }) => {
  const ModalData = {
    isOpen: modal,
    class: "modal-dialog-centered",
    toggler: toggle,
  };
  return (
    <CommonModal modalData={ModalData}>
      <div className='modal-toggle-wrapper'>
        <ul className='modal-img'>
          <li>
            <Image src={`${ImagePath}/gif/logout.gif`} alt='logout' width={100} height={100} />
          </li>
        </ul>
        <h4 className='pt-3 text-center'>{Alreadyleaving}</h4>
        <p className='text-center'>{LogoutText}</p>
        <span className='d-block text-center mb-4'>
          {Notamember}
          <Link className='ms-1' href={Href}>
            {Register}
          </Link>
        </span>
        <Button color='dark' className='d-flex m-auto' onClick={toggle}>
          {YesLogout}
        </Button>
      </div>
    </CommonModal>
  );
};

export default OtherModal;
