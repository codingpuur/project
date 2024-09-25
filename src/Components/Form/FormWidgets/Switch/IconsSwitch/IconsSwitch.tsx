import { Card, Col } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import { IconsWithHeading } from "@/utils/Constant";
import CommonIconsSwitch from "../CommonIconsSwitch/CommonIconsSwitch";
import { IconsSwitchTopData, iconsSwitchData } from "@/Data/Form/FormWidgets/SwitchData";

const IconsSwitch = () => {
 
  return (
    <Col xl={4} sm={6}>
      <Card className="height-equal">
        <CommonHeader title={IconsWithHeading} subTitle={IconsSwitchTopData} headClass="pb-0"/>
        <CommonIconsSwitch switchData={iconsSwitchData} mediaBodyClassName="icon-state" />
      </Card>
    </Col>
  );
};

export default IconsSwitch;
