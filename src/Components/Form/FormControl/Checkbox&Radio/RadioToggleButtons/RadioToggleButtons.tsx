import { Card, Col } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import { RadioToggleButtonsHeading } from "@/utils/Constant";
import RadioToggleButtonsCardBody from "./RadioToggleButtonsCardBody";
import { RadioToggleButtonsAlldata } from "@/Data/Form/FormControl/FormControlData";

const RadioToggleButtons = () => {
  return (
    <Col md={6}>
      <Card>
        <CommonHeader title={RadioToggleButtonsHeading} subTitle={RadioToggleButtonsAlldata} />
        <RadioToggleButtonsCardBody />
      </Card>
    </Col>
  );
};

export default RadioToggleButtons;
