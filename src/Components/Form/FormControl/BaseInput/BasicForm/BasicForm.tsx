import { Card, CardBody, Col } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import { BasicFormHeading } from "@/utils/Constant";
import FormBasic from "./FormBasic";
import { BasicFormData } from "@/Data/Form/FormControl/FormControlData";

const BasicForm = () => {
  return (
    <Col md={6}>
      <Card>
        <CommonHeader title={BasicFormHeading} subTitle={BasicFormData} headClass='pb-0' />
        <CardBody>
          <div className='card-wrapper border rounded-3'>
            <FormBasic />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BasicForm;
