import { Card, Col } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import CustomFormsCardBody from "./CustomFormsCardBody";
import { CustomFormsHeading } from "@/utils/Constant";
import { CustomFormsAllData } from "@/Data/Form/FormControl/FormControlData";

const CustomForms = () => {
  return (
    <Col md={6}>
      <Card>
        <CommonHeader title={CustomFormsHeading} subTitle={CustomFormsAllData} headClass='pb-0' />
        <CustomFormsCardBody />
      </Card>
    </Col>
  );
};

export default CustomForms;
