import { useState } from "react";
import { Dropzone, FileMosaic, ExtFile } from "@dropzone-ui/react";
import { Col, FormGroup, Label, Row } from "reactstrap";
import { ActualFileUpload, DropFileUploadText, DropFilesHereOrClickToUpload, UploadProjectFiles } from "@/utils/Constant";

const UploadProjectFile = () => {
  const [files, setFiles] = useState<ExtFile[]>([]);
  const updateFiles = (incommingFiles: ExtFile[]) => {
    setFiles(incommingFiles);
  };
  const removeFile = (id: string | number | undefined) => {
    setFiles(files.filter((x: ExtFile) => x.id !== id));
  };

  return (
    <Row>
      <Col>
        <FormGroup>
          <Label check>{UploadProjectFiles}</Label>
          <Dropzone onChange={updateFiles} value={files} maxFiles={1} header={false} footer={false} minHeight='80px' label="Drag'n drop files here or click to Browse">
            {files.map((file: ExtFile) => (
              <FileMosaic key={file.id} {...file} onDelete={removeFile} info={true} />
            ))}
            {files.length === 0 && (
              <div className='dz-message needsclick p-5'>
                <i className='icon-cloud-up fs-1 text-success'></i>
                <h6 className='f-w-700 mb-1'>{DropFilesHereOrClickToUpload}</h6>
                <h6 className='note needsclick'>
                  {DropFileUploadText}
                  <strong>not</strong>
                  {ActualFileUpload}
                </h6>
              </div>
            )}
          </Dropzone>
        </FormGroup>
      </Col>
    </Row>
  );
};

export default UploadProjectFile;
