import { Card, CardBody, Col } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import FormFloating from "./FormFloating";
import { FloatingFormHeading } from "@/utils/Constant";
import { FloatingFormData } from "@/Data/Form/FormControl/FormControlData";

const FloatingForm = () => {
  return (
    <Col md={6}>
      <Card>
        <CommonHeader title={FloatingFormHeading} subTitle={FloatingFormData} headClass='pb-0' />
        <CardBody>
          <div className='card-wrapper border rounded-3'>
            <FormFloating />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default FloatingForm;
