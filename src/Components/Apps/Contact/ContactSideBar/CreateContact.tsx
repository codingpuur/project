import { Users } from 'react-feather';
import { Button, Col, Form, FormGroup, Input, Label, Modal, ModalBody, Row } from 'reactstrap';
import { AddContacts, Cancel, Email, FirstName, LastName, Mobile, Name, NewContacts, Phone, Save } from '@/utils/Constant';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '@/Redux/Hooks';
import { ContactusersType } from '@/Types/Apps/ContactTypes';
import { createUser, setContactValidation, setModal } from '@/Redux/Reducer/ContactSlice';

const CreateContact = () => {
    const { modal,contactValidation } = useAppSelector((state) => state.contact);
    const {register,formState: { errors },handleSubmit, reset} = useForm<ContactusersType>();
    const dispatch = useAppDispatch();
    const toggle = () => dispatch(setModal());
  
    const AddContact: SubmitHandler<ContactusersType> = (data) => {
      if (data !== undefined) {
        dispatch(createUser(data));
        dispatch(setModal());
        reset();
      }
    };
  return (
    <>
      <Button block className="badge-light-primary txt-primary btn-mail w-100" color="" onClick={toggle}>
        <Users className="me-2" />{NewContacts}
      </Button>
      <Modal className="modal-bookmark" isOpen={modal} toggle={toggle} size="lg">
        <div className="modal-header">
          <h3 className="modal-title">{AddContacts}</h3>
          <Button color="transprant" close onClick={toggle} type="button"></Button>
        </div>
        <ModalBody>
          <Form className="form-bookmark needs-validation" onSubmit={handleSubmit(AddContact)}>
            <Row className="g-2">
              <Col md={12} className="mb-3 mt-0">
                <Row>
                  <Col sm={6} className="mb-3 mt-0">
                    <Label check>{Name}</Label>
                    <input className={`form-control ${contactValidation && `${errors.name ? "is-invalid" : "is-valid"}`}`} type="text" {...register("name", { required: true })} placeholder={FirstName} />
                  </Col>
                  <Col sm={6}>
                    <Label check>{LastName}</Label>
                    <input className={`form-control ${contactValidation && `${errors.surename ? "is-invalid" : "is-valid"}`}`} type="text" {...register("surename", { required: true })} placeholder={LastName} />
                  </Col>
                </Row>
              </Col>
              <Col md={12}>
                <FormGroup>
                  <Label check>{Email}</Label>
                  <input className={`form-control ${contactValidation && `${errors.email ? "is-invalid" : "is-valid"}`}`} type="text" {...register("email", { required: true })} />
                </FormGroup>
              </Col>
              <Col md={12}>
                <FormGroup>
                  <Row>
                    <Col sm={6}>
                      <Label check>{Phone}</Label>
                      <input className={`form-control ${contactValidation && `${errors.mobile ? "is-invalid" : "is-valid"}`}`} type="number" {...register("mobile", { required: true })} />
                    </Col>
                    <Col sm={6}>
                      <Label check>{Mobile}</Label>
                      <Input type="select">
                        <option>{'Mobile'}</option>
                        <option>{'Work'}</option>
                        <option>{'Other'}</option>
                      </Input>
                    </Col>
                  </Row>
                </FormGroup>
              </Col>
            </Row>
            <Button color="secondary" className="me-1" type="submit" onClick={() => dispatch(setContactValidation(true))}>{Save}</Button>
            <Button color="primary" onClick={toggle}>{Cancel}</Button>
          </Form>
        </ModalBody>
      </Modal>
    </>
  )
}

export default CreateContact