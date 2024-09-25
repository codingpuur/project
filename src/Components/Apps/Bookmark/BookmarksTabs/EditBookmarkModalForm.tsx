import { Button, Col, Label, Row } from "reactstrap";
import { Cancel, Collection, Description, Group, MyBookmark, Save, Title, WebUrl } from "@/utils/Constant";
import { EditBookmarkModalFormType } from "@/Types/Apps/BookmarkTypes";

const EditBookmarkModalForm: React.FC<EditBookmarkModalFormType> = ({ register, errors, editToggle, handleSubmit, updateBookMarkData }) => {
  return (
    <form className='form-bookmark needs-validation' onSubmit={handleSubmit(updateBookMarkData)}>
      <Row className='g-2'>
        <Col md={12} className='mb-3 mt-0'>
          <Label check>{WebUrl}</Label>
          <input className='form-control' type='text' {...register("url", { required: true })} />
          {errors.url && <span className='text-danger'>Url is required</span>}
        </Col>
        <Col md={12} className='mb-3 mt-0'>
          <Label check>{Title}</Label>
          <input className='form-control' type='text' {...register("title", { required: true })} />
          {errors.title && <span className='text-danger'>Title is required</span>}
        </Col>
        <Col md={12} className='mb-3 mt-0'>
          <Label check>{Description}</Label>
          <input className='form-control' type='textarea' {...register("desc", { required: true })} />
          {errors.desc && <span className='text-danger'>Description is required</span>}
        </Col>
        <Col md={6} className='mb-3 mt-0'>
          <Label check>{Group}</Label>
          <select className='form-control' name='group'>
            <option value='bookmark'>{MyBookmark}</option>
          </select>
        </Col>
        <Col md={6} className='mb-3 mt-0'>
          <Label check>{Collection}</Label>
          <select className='form-control' name='collection'>
            <option value='General'>General</option>
            <option value='Fs'>Fs</option>
          </select>
        </Col>
      </Row>
      <Button color='primary' type='submit' className='me-1'>
        {Save}
      </Button>
      <Button color='secondary' onClick={editToggle}>
        {Cancel}
      </Button>
    </form>
  );
};

export default EditBookmarkModalForm;
