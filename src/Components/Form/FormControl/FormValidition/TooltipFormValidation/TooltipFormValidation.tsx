import { Card, CardBody, Col } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import { TooltipFormValidationHeading } from "@/utils/Constant";
import TooltipFormValidationForm from "./TooltipFormValidationForm";
import { TooltipFormValidationData } from "@/Data/Form/FormControl/FormControlData";

const TooltipFormValidation = () => {
  return (
    <Col sm={12}>
      <Card>
        <CommonHeader title={TooltipFormValidationHeading} subTitle={TooltipFormValidationData} headClass='pb-0' />
        <CardBody>
          <TooltipFormValidationForm />
        </CardBody>
      </Card>
    </Col>
  );
};

export default TooltipFormValidation;
