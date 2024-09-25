import { Card, CardBody, Col, Input } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import { FormControlSizingHeading } from "@/utils/Constant";
import { FormControlSizingData } from "@/Data/Form/FormControl/FormControlData";

const FormControlSizing = () => {
  return (
    <Col md={6}>
      <Card>
        <CommonHeader title={FormControlSizingHeading} subTitle={FormControlSizingData}/>
        <CardBody>
          <Input bsSize="sm" type="text" placeholder=".form-control-sm"/>
        </CardBody>
      </Card>
    </Col>
  );
};

export default FormControlSizing;
