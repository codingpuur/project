import { Card, Col } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import CommonIconsSwitch from "../CommonIconsSwitch/CommonIconsSwitch";
import { BordersWithIconsHeading } from "@/utils/Constant";
import { BordersWithIconsData, borderedSwitchData } from "@/Data/Form/FormWidgets/SwitchData";

const BordersWithIcons = () => {
  
  return (
    <Col xl={4} sm={6}>
      <Card className="height-equal">
        <CommonHeader
          title={BordersWithIconsHeading}
          subTitle={BordersWithIconsData}
          headClass="pb-0"
        />
        <CommonIconsSwitch switchData={borderedSwitchData} mediaBodyClassName="icon-state switch-outline" />
      </Card>
    </Col>
  );
};

export default BordersWithIcons;
