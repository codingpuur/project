import { Card, Col } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import { CheckboxesAndRadiosHeading } from "@/utils/Constant";
import CheckBoxesAndRadiosCardBody from "./CheckBoxesAndRadiosCardBody";
import { CheckBoxesAndRadiosData } from "@/Data/Form/FormControl/FormControlData";

const CheckBoxesAndRadios = () => {
  return (
    <Col md={6}>
      <Card className='height-equal'>
        <CommonHeader title={CheckboxesAndRadiosHeading} subTitle={CheckBoxesAndRadiosData} headClass='pb-0' />
        <CheckBoxesAndRadiosCardBody />
      </Card>
    </Col>
  );
};

export default CheckBoxesAndRadios;
