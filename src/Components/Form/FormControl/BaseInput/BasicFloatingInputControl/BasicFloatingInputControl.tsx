import { Card, Col } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import BasicFloatingInputControlForm from "./BasicFloatingInputControlForm";
import { BasicFloatingInputControlHeading } from "@/utils/Constant";
import { BasicFloatingInputControlData } from "@/Data/Form/FormControl/FormControlData";

const BasicFloatingInputControl = () => {
  return (
    <Col xl={6}>
      <Card className='height-equal'>
        <CommonHeader title={BasicFloatingInputControlHeading} subTitle={BasicFloatingInputControlData} headClass='pb-0' />
        <BasicFloatingInputControlForm />
      </Card>
    </Col>
  );
};

export default BasicFloatingInputControl;
