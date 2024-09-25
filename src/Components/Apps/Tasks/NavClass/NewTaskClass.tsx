import { Fragment, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button, Col, FormGroup, Input, Label, Modal, ModalBody, Row } from "reactstrap";
import { AddTask, Cancel, Collection, Description, General, NewTask, Save, TaskTitle } from "@/utils/Constant";
import { CheckCircle } from "react-feather";
import { FormDataTypes } from "@/Types/Apps/TasksTypes";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { setAllTasks } from "@/Redux/Reducer/TasksSlice";

const NewTaskClass = () => {
  const { allTasks } = useAppSelector((state) => state.tasks);
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormDataTypes>();

  const [addModal, setAddModal] = useState(false);
  const addToggle = () => {
    setAddModal(!addModal);
    reset({
      description: "",
      title: "",
    });
  };

  const addTask: SubmitHandler<FormDataTypes> = (data) => {
    if (data.description !== "" && data.title !== "") {
      const taskTemp = {
        id: allTasks.length + 1,
        title: data.title,
        collection: "General",
        description: data.description,
      };
      dispatch(setAllTasks([...allTasks, taskTemp]));
      setAddModal(false);
      reset({
        description: "",
        title: "",
      });
    }
  };
  return (
    <Fragment>
      <Button block color='' className='badge-light-primary txt-primary btn-mail w-100' onClick={addToggle}>
        <CheckCircle className='me-2' /> {NewTask}
      </Button>
      <Modal isOpen={addModal} toggle={addToggle} size='lg'>
        <div className='modal-header'>
          <h3 className='modal-title'>{AddTask}</h3>
          <Button color='transprant' close onClick={addToggle}></Button>
        </div>
        <ModalBody>
          <form className='form-bookmark needs-validation' onSubmit={handleSubmit(addTask)}>
            <Row>
              <Col md={12}>
                <FormGroup className='create-group'>
                  <Label>{TaskTitle}</Label>
                  <input className='form-control' type='text' {...register("title", { required: true })} />
                  <span style={{ color: "red" }}>{errors.title && "Title is required"}</span>
                </FormGroup>
              </Col>
              <Col md={12}>
                <FormGroup className='create-group'>
                  <Label>{Collection}</Label>
                  <Input className='js-example-disabled-results' name='collection' type='select'>
                    <option value='general'>{General}</option>
                    <option value='fs'>{"Fs"}</option>
                  </Input>
                </FormGroup>
              </Col>
              <Col md={12}>
                <FormGroup className='create-group'>
                  <Label>{Description}</Label>
                  <input className='form-control' type='textarea' {...register("description", { required: true })} />
                  <span style={{ color: "red" }}>{errors.description && "Description is required"}</span>
                </FormGroup>
              </Col>
            </Row>
            <Button color='secondary' className='me-1'>
              {Save}
            </Button>
            &nbsp;&nbsp;
            <Button color='primary' onClick={addToggle}>
              {Cancel}
            </Button>
          </form>
        </ModalBody>
      </Modal>
    </Fragment>
  );
};

export default NewTaskClass;
