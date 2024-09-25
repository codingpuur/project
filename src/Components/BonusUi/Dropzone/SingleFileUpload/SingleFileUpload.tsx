import { Card, CardBody, Col } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import { SingleFileUploads } from "@/utils/Constant";
import { SingleFileUploadData } from "@/Data/BonusUi/Dropzone/DropzoneData";
import CommonFileUpload from "../Common/CommonFileUpload";

const SingleFileUpload = () => {
  return (
    <Col lg={6}>
      <Card>
        <CommonHeader title={SingleFileUploads} subTitle={SingleFileUploadData} headClass='pb-0' />
        <CardBody>
          <CommonFileUpload maxFiles={1} body={true} />
        </CardBody>
      </Card>
    </Col>
  );
};

export default SingleFileUpload;
