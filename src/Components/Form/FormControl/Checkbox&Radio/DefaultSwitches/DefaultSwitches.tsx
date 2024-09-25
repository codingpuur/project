import { Card, CardBody, Col, Row } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import { DefaultSwitchesBoxHeading } from "@/utils/Constant";
import CustomSwitch from "./CustomSwitch";
import DisabledSwitch from "./DisabledSwitch";
import RightSwitches from "./RightSwitches";
import { DefaultSwitchesData } from "@/Data/Form/FormControl/FormControlData";

const DefaultSwitches = () => {
  return (
    <Col xs={12}>
      <Card>
        <CommonHeader title={DefaultSwitchesBoxHeading} subTitle={DefaultSwitchesData}  headClass="pb-0" />
        <CardBody>
          <Row className="g-3">
            <CustomSwitch />
            <DisabledSwitch />
            <RightSwitches />
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default DefaultSwitches;
