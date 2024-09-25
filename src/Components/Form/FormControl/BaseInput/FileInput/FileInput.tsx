import { Card, CardBody, Col, FormGroup, Input, Label } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import { DefaultExample, DisabledExample, FileInputHeading, LargeFileInputExample, MultipleExample, SmallFileInputExample } from "@/utils/Constant";
import { FileInputData } from "@/Data/Form/FormControl/FormControlData";

const FileInput = () => {
  return (
    <Col md={6}>
      <Card>
        <CommonHeader title={FileInputHeading} subTitle={FileInputData} headClass='pb-0' />
        <CardBody>
          <FormGroup>
            <Label>{DefaultExample}</Label>
            <Input type='file' />
          </FormGroup>
          <FormGroup>
            <Label>{MultipleExample}</Label>
            <Input type='file' multiple />
          </FormGroup>
          <FormGroup>
            <Label>{DisabledExample}</Label>
            <Input type='file' disabled />
          </FormGroup>
          <FormGroup>
            <Label>{SmallFileInputExample}</Label>
            <Input bsSize="sm" type='file' />
          </FormGroup>
          <div>
            <Label>{LargeFileInputExample}</Label>
            <Input bsSize="lg" type='file' />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default FileInput;
