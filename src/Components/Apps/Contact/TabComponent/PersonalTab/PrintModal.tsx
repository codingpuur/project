import { useRef } from 'react';
import { Button, Modal, ModalBody } from 'reactstrap';
import { Cancel, Print, PrintViews } from '@/utils/Constant';
import PrintPreview from './PrintPreview';
import ReactToPrint from 'react-to-print';
import { PrintModalPropsTypes } from '@/Types/Apps/ContactTypes';

const PrintModal:React.FC<PrintModalPropsTypes> = ({ printModal, selectedUser, toggleCallback }) => {
  const printModalToggle = () => {toggleCallback(false)};
  const componentRef = useRef();
  return (
    <Modal fade className="modal-bookmark" isOpen={printModal} toggle={printModalToggle}>
      <div className='modal-header'>
        <h3 className="modal-title">{PrintViews}</h3>
        <Button color="transprant" close onClick={printModalToggle}></Button>
      </div>
      <ModalBody className="list-persons">
        <PrintPreview selectedUser={selectedUser} />
        <ReactToPrint trigger={() => (
            <Button color="secondary" className="me-1">{Print}</Button>
          )}
          content={() => componentRef?.current || null}
        />
        <Button color="primary" onClick={printModalToggle}>{Cancel}</Button>
      </ModalBody>
    </Modal>
  )
}

export default PrintModal