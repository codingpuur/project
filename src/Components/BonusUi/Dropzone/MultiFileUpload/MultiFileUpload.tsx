import { Card, CardBody, Col } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import { MultiFileUploads } from "@/utils/Constant";
import { MultiFileUploadData } from "@/Data/BonusUi/Dropzone/DropzoneData";
import CommonFileUpload from "../Common/CommonFileUpload";

const MultiFileUpload = () => {
  return (
    <Col lg={6}>
      <Card>
        <CommonHeader title={MultiFileUploads} subTitle={MultiFileUploadData} headClass='pb-0' />
        <CardBody>
          <CommonFileUpload multiple={true} body={true} />
        </CardBody>
      </Card>
    </Col>
  );
};

export default MultiFileUpload;
