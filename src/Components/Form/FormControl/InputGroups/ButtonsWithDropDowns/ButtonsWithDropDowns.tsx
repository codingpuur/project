import { Card, Col } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import { ButtonsWithDropDownsHeading } from "@/utils/Constant";
import ButtonsWithDropDownsCardBody from "./ButtonsWithDropDownsCardBody";
import { ButtonsWithDropDownsData } from "@/Data/Form/FormControl/FormControlData";

const ButtonsWithDropDowns = () => {
  return (
    <Col xl={6}>
      <Card className='height-equal'>
        <CommonHeader title={ButtonsWithDropDownsHeading} subTitle={ButtonsWithDropDownsData} headClass='pb-0' />
        <ButtonsWithDropDownsCardBody />
      </Card>
    </Col>
  );
};

export default ButtonsWithDropDowns;
