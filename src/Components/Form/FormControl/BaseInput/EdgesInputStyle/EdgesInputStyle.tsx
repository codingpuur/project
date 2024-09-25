import { Card, Col } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import EdgesInputStyleForm from "./EdgesInputStyleForm";
import { EdgesInputStyleHeading } from "@/utils/Constant";
import { EdgesInputStyleData } from "@/Data/Form/FormControl/FormControlData";

const EdgesInputStyle = () => {
  return (
    <Col md={6}>
      <Card>
        <CommonHeader title={EdgesInputStyleHeading} subTitle={EdgesInputStyleData} headClass="pb-0"/>
        <EdgesInputStyleForm />
      </Card>
    </Col>
  );
};

export default EdgesInputStyle;
