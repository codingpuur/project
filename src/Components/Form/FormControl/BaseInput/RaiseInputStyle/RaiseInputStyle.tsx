import { Card, Col } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import { RaiseInputStyleHeading } from "@/utils/Constant";
import RaiseInputStyleForm from "./RaiseInputStyleForm";
import { RaiseInputStyleData } from "@/Data/Form/FormControl/FormControlData";

const RaiseInputStyle = () => {
  return (
    <Col md={6}>
      <Card className='height-equal'>
        <CommonHeader title={RaiseInputStyleHeading} subTitle={RaiseInputStyleData} />
        <RaiseInputStyleForm />
      </Card>
    </Col>
  );
};

export default RaiseInputStyle;
