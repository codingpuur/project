import { Card, Col } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import { UncheckedSwitchHeading } from "@/utils/Constant";
import CommonIconsSwitch from "../CommonIconsSwitch/CommonIconsSwitch";
import { UncheckedSwitchTopData, unCheckedSwitchData } from "@/Data/Form/FormWidgets/SwitchData";

const UncheckedSwitch = () => {
  
  return (
    <Col xl={4} sm={6}>
      <Card className="height-equal">
        <CommonHeader
          title={UncheckedSwitchHeading}
          subTitle={UncheckedSwitchTopData}
          headClass="pb-0"
        />
        <CommonIconsSwitch switchData={unCheckedSwitchData} defaultUnChecked />
      </Card>
    </Col>
  );
};

export default UncheckedSwitch;
