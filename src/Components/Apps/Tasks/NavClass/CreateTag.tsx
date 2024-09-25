import { useForm } from "react-hook-form";
import { Button, FormGroup, Label, Modal, ModalBody, Form, Col } from "reactstrap";
import { Cancel, Save } from "@/utils/Constant";
import { CreatePropsTypes } from "@/Types/Apps/TasksTypes";

const CreateTag: React.FC<CreatePropsTypes> = ({ tagCallback, tagModal }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const tagToggle = () => {
    tagCallback(false);
  };
  const AddTag = () => {
    tagCallback(false);
    reset({
      name: "",
    });
  };
  return (
    <Modal className='fade show modal-bookmark' isOpen={tagModal} toggle={tagToggle} size='lg'>
      <div className='modal-header'>
        <h3 className='modal-title'>{"Create Tag"}</h3>
        <Button color='transprant' className='btn-close' onClick={tagToggle}></Button>
      </div>
      <ModalBody>
        <Form className='form-bookmark needs-validation' onSubmit={handleSubmit(AddTag)}>
          <div className='form-row'>
            <Col md={12}>
              <FormGroup>
                <Label>{"Tag Name"}</Label>
                <input className='form-control' type='text' {...register("name", { required: true })} />
                <span style={{ color: "red" }}>{errors.name && "First name is required"}</span>
              </FormGroup>
            </Col>
            <Col md={12}>
              <FormGroup className='mb-0 custom-form-book'> 
                <Label>{"Tag color"}</Label> 
                <input className='d-block' type='color' {...register("color", { required: true })} defaultValue='#35bfbf' />
              </FormGroup>
            </Col>
          </div>
          <Button color='secondary'>
            {Save}
          </Button>
          &nbsp;&nbsp;
          <Button color='primary' onClick={tagToggle}>
            {Cancel}
          </Button>
        </Form>
      </ModalBody>
    </Modal>
  );
};

export default CreateTag;
