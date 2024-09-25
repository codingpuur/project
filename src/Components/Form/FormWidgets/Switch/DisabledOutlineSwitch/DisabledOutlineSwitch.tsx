import { Card, Col } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import { DisabledOutlineSwitchHeading } from "@/utils/Constant";
import DisabledOutlineSwitchCardBody from "./DisabledOutlineSwitchCardBody";
import { disabledOutlineSwitchHeaderData } from "@/Data/Form/FormWidgets/SwitchData";

const DisabledOutlineSwitch = () => {
  return (
    <Col md={6}>
      <Card>
        <CommonHeader title={DisabledOutlineSwitchHeading} subTitle={disabledOutlineSwitchHeaderData} />
        <DisabledOutlineSwitchCardBody />
      </Card>
    </Col>
  );
};

export default DisabledOutlineSwitch;
