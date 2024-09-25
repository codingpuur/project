import { Card, Col } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import { FlatInputStyleHeading } from "@/utils/Constant";
import FlatInputStyleForm from "./FlatInputStyleForm";
import { FlatInputStyleData } from "@/Data/Form/FormControl/FormControlData";

const FlatInputStyle = () => {
  return (
    <Col md={6}>
      <Card className="height-equal">
        <CommonHeader
          title={FlatInputStyleHeading}
          subTitle={FlatInputStyleData}
          headClass="pb-0"
        />
        <FlatInputStyleForm />
      </Card>
    </Col>
  );
};

export default FlatInputStyle;
