import { Button, Col, Form, Input, Label, Modal, ModalBody, ModalHeader, Row } from "reactstrap";
import { Cancel, CreateTag, Save, TagColor, TagName } from "@/utils/Constant";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { setTagModal } from "@/Redux/Reducer/BookmarkTabSlice";

const ModalTag = () => {
  const { tagModal } = useAppSelector((state) => state.bookmarkTab);
  const dispatch = useAppDispatch();
  const tagToggle = () => dispatch(setTagModal());
  return (
    <Modal fade className='modal-bookmark' size='lg' isOpen={tagModal} toggle={tagToggle}>
      <ModalHeader className='modal-title' toggle={tagToggle}>
        <h3>{CreateTag}</h3>
      </ModalHeader>
      <ModalBody>
        <Form className='form-bookmark needs-validation'>
          <Row>
            <Col md={12} className='mb-3 mt-0'>
              <Label check>{TagName}</Label>
              <Input type='text' value={""} />
            </Col>
            <Col md={12} className='mb-3 mt-0'>
              <Label check>{TagColor}</Label>
              <Input type='color' className='d-block' defaultValue='#33BFBF' />
            </Col>
          </Row>
          <Button color='secondary' className='me-1' onClick={tagToggle}>
            {Save}
          </Button>
          <Button color='primary' onClick={tagToggle}>
            {Cancel}
          </Button>
        </Form>
      </ModalBody>
    </Modal>
  );
};

export default ModalTag;
