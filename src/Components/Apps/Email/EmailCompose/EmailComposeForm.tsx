import { Form, FormGroup, Input, Label } from "reactstrap";
import { Messages, Subject, To } from "@/utils/Constant";
import SimpleMDE from "react-simplemde-editor";
import { Dropzone, ExtFile, FileMosaic } from "@dropzone-ui/react";
import { useState } from "react";

const EmailComposeForm = () => {
  const [text, setText] = useState(`Enter text in the area on the left. For more info, click the ? (help) icon in the menu.`);
  const handleChange = () => {
    setText("Enter text in the area on the left. For more info, click the ? (help) icon in the menu.");
  };

  const [files, setFiles] = useState<ExtFile[]>([]);
  const updateFiles = (incomingFiles: ExtFile[]) => {
    setFiles(incomingFiles);
  };
  const removeFile = (id: string | number | undefined) => {
    setFiles(files.filter((x: ExtFile) => x.id !== id));
  };
  return (
    <div className='email-wrapper'>
      <Form className='theme-form'>
        <FormGroup>
          <Label className='col-form-label pt-0'>{To}</Label>
          <Input type='email' />
        </FormGroup>
        <FormGroup>
          <Label className='col-form-label pt-0'>{Subject}</Label>
          <Input type='text' value={""} />
        </FormGroup>
        <FormGroup>
          <Label className='col-form-label pt-0'>{Messages}</Label>
          <SimpleMDE id='editor_container' onChange={handleChange} value={text} options={{ autofocus: true, spellChecker: false }} />
        </FormGroup>
        <FormGroup>
          <Dropzone onChange={updateFiles} value={files} maxFiles={1} header={false} footer={false} minHeight='80px' label="Drag'n drop files here or click to Browse">
            {files.map((file: ExtFile) => (
              <FileMosaic key={file.id} {...file} onDelete={removeFile} info={true} />
            ))}
          </Dropzone>
        </FormGroup>
      </Form>
    </div>
  );
};

export default EmailComposeForm;
