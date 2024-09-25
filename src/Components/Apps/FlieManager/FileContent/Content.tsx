import { FiPlusSquare, FiUpload } from "react-icons/fi";
import { Button, Form, Input } from "reactstrap";
import { AddNew, Upload } from "@/utils/Constant";
import { getFile, onFileUpload } from "@/Redux/Reducer/FileManagerSlice";
import { useAppDispatch } from "@/Redux/Hooks";
import { ChangeEvent, useState } from "react";

export const Content = ()=> {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const dispatch = useAppDispatch();

  const onFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) setSelectedFile(files[0]);
  };
  return (
    <div className='flex-grow-1  text-end'>
      <Form className='d-inline-flex' method='POST' name='myForm'>
        <Button color='primary' className='d-flex align-items-center' onClick={() => dispatch(getFile())}>
          <FiPlusSquare className='me-1' />
          {AddNew}
        </Button>
        <div className='file-data d-none'>
          <Input id='upfile' type='file' multiple onChange={(e) => onFileChange(e)} />
        </div>
      </Form>

      <div color='' className='btn btn-outline-primary ms-2' onClick={() => dispatch(onFileUpload(selectedFile))}>
        <FiUpload className='me-1' />
        {Upload}
      </div>
    </div>
  );
}


