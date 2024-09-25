import { Card, Col } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import { MultipleInputsHeading } from "@/utils/Constant";
import MultipleInputsCardBody from "./MultipleInputsCardBody";
import { MultipleInputsAllData } from "@/Data/Form/FormControl/FormControlData";

const MultipleInputs = () => {
  return (
    <Col md={6}>
      <Card>
        <CommonHeader title={MultipleInputsHeading} subTitle={MultipleInputsAllData} />
        <MultipleInputsCardBody />
      </Card>
    </Col>
  );
};

export default MultipleInputs;
