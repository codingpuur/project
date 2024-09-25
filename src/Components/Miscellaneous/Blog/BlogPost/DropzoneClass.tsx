import CommonFileUpload from "@/Components/BonusUi/Dropzone/Common/CommonFileUpload";
import { Form } from "reactstrap";

const DropzoneClass = () => {
  return (
    <Form className='m-b-20'>
      <div className='m-0 dz-message needsclick'>
        <CommonFileUpload maxFiles={1} body={true} />
      </div>
    </Form>
  );
};

export default DropzoneClass;
