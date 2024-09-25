import { Card, Col } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import { CustomFileInputHeading } from "@/utils/Constant";
import CustomFileInputCardBody from "./CustomFileInputCardBody";
import { CustomFileInputData } from "@/Data/Form/FormControl/FormControlData";

const CustomFileInput = () => {
  
  return (
    <Col xl={6}>
      <Card className="height-equal">
        <CommonHeader title={CustomFileInputHeading} subTitle={CustomFileInputData} headClass="pb-0"/>
        <CustomFileInputCardBody />
      </Card>
    </Col>
  );
};

export default CustomFileInput;
