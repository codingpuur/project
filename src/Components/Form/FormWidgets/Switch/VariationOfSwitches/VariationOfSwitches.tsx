import { Card, Col } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import { VariationOfSwitchesHeading } from "@/utils/Constant";
import VariationOfSwitchesCardBody from "./VariationOfSwitchesCardBody";
import { variationOfSwitchHeaderData } from "@/Data/Form/FormWidgets/SwitchData";

const VariationOfSwitches = () => {
  return (
    <Col md={6}>
      <Card>
        <CommonHeader title={VariationOfSwitchesHeading} subTitle={variationOfSwitchHeaderData} />
        <VariationOfSwitchesCardBody />
      </Card>
    </Col>
  );
};

export default VariationOfSwitches;
