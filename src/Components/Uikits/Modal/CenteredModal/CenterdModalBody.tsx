import CommonModal from "@/CommonElements/Ui-kits/CommonModal";
import { ImagePath } from "@/Constant";
import { ModelPropsType } from "@/Types/ModelTypes";
import { CenteredError, Close } from "@/utils/Constant";
import Image from "next/image";
import { Button } from "reactstrap";

const CenterdModalBody:React.FC<ModelPropsType>= ({ modal, toggle }) => {
  const ModalData = {
    isOpen: modal,
    class: "modal-dialog-centered",
    toggler: toggle,
    title: "Centered Modal",
  };
  return (
    <CommonModal modalData={ModalData}>
      <div className="modal-toggle-wrapper">
        <ul className="modal-img justify-content-center">
          <li>
            <Image
              src={`${ImagePath}/gif/danger.gif`}
              alt="error"
              width={100}
              height={100}
            />
          </li>
        </ul>
        <h4 className="text-center pb-2">{CenteredError}</h4>
        <p className="text-center">{"Attackers on malicious activity may trick you into doing something dangrous like installing software or revealing your personal informations."}</p>
        <Button
          color="secondary"
          className="d-flex m-auto"
          onClick={toggle}
        >
          {Close}
        </Button>
      </div>
    </CommonModal>
  );
};

export default CenterdModalBody;
