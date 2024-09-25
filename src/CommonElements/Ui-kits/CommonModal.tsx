import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { Close, SaveChanges } from "@/utils/Constant";
import { PropsTypes } from "@/Types/uikitsType";

const CommonModal: React.FC<PropsTypes> = ({ modalData, children }) => {
  return (
    <Modal className={modalData.class} isOpen={modalData.isOpen} toggle={modalData.toggler} size={modalData.size}>
      {modalData.header && <ModalHeader tag={'h4'}  toggle={modalData.toggler}>{modalData.title}</ModalHeader>}
      <ModalBody className={modalData.bodyClass}>{children}</ModalBody>
      {modalData.footer && (
        <ModalFooter>
          <Button color='secondary' onClick={modalData.toggler}>
            {Close}
          </Button>
          <Button color='primary' onClick={modalData.toggler}>
            {modalData.button ? modalData.button : SaveChanges}
          </Button>
        </ModalFooter>
      )}
    </Modal>
  );
};
export default CommonModal;
