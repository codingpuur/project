import { useState } from "react";
import { Card, CardBody, Col } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import { FilePond, registerPlugin } from "react-filepond";
import { ImagePreviews } from "@/utils/Constant";
import { ImagePreviewData } from "@/Data/BonusUi/Dropzone/DropzoneData";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

const ImagePreview = () => {
  const [files, setFiles] = useState([]);
  return (
    <Col lg={6}>
      <Card>
        <CommonHeader title={ImagePreviews} subTitle={ImagePreviewData} headClass='pb-0' />
        <CardBody>
          <FilePond files={files} allowReorder={true} allowMultiple={true} maxFiles={1} onupdatefiles={() => setFiles} labelIdle='Drag & Drop your files or <span className="filepond--label-action text-danger text-decoration-none">Browse</span>' />
        </CardBody>
      </Card>
    </Col>
  );
};

export default ImagePreview;
