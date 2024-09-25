import { Card, CardBody, Col } from "reactstrap";
import ValidationsForm from "./ValidationsForm";
import { ValidationFormHeading } from "@/utils/Constant";
import CommonHeader from "@/Common/CommonHeader";
import { ValidationFormData } from "@/Data/Form/FormControl/FormControlData";

const ValidationForm = () => {
  return (
    <Col xl={6}>
      <Card className='height-equal'>
        <CommonHeader title={ValidationFormHeading} subTitle={ValidationFormData} headClass='pb-0' />
        <CardBody>
          <ValidationsForm />
        </CardBody>
      </Card>
    </Col>
  );
};

export default ValidationForm;
