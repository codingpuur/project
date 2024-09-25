import { useState } from "react";
import { Card, CardBody, Col } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import { DefaultFileUpload } from "@/utils/Constant";
import { FilePond } from "react-filepond";
import { DefaultDropzoneData } from "@/Data/BonusUi/Dropzone/DropzoneData";

const DefaultDropzone = () => {
  const [files, setFiles] = useState([]);

  return (
    <Col lg={6}>
      <Card>
        <CommonHeader title={DefaultFileUpload} subTitle={DefaultDropzoneData} headClass='pb-0' />
        <CardBody>
          <FilePond files={files} onupdatefiles={() => setFiles} allowMultiple={true} maxFiles={1} labelIdle={'Drag & Drop your files or <span class="filepond--label-action text-danger text-decoration-none">Browse</span>'} />
        </CardBody>
      </Card>
    </Col>
  );
};

export default DefaultDropzone;
