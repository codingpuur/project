import { Card, Col } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import BasicHTMLInputControlForm from "./BasicHTMLInputControlForm";
import { BasicHTMLInputControlHeading } from "@/utils/Constant";
import { BasicHTMLInputControlData } from "@/Data/Form/FormControl/FormControlData";

const BasicHTMLInputControl = () => {
  
  return (
    <Col xl={6}>
      <Card className="height-equal">
        <CommonHeader title={BasicHTMLInputControlHeading} subTitle={BasicHTMLInputControlData} headClass="pb-0"/>
        <BasicHTMLInputControlForm />
      </Card>
    </Col>
  );
};

export default BasicHTMLInputControl;
