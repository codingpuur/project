import { Card, Col } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import { SwitchWithIconsHeading } from "@/utils/Constant";
import CommonSwitchSize from "../SwitchSizing/CommonSwitchSize";
import { switchSizingWithIconsHeaderData } from "@/Data/Form/FormWidgets/SwitchData";

const SwitchWithIcons = () => {
  return (
    <Col md={12}>
      <Card>
        <CommonHeader title={SwitchWithIconsHeading} subTitle={switchSizingWithIconsHeaderData} headClass='pb-0' />
        <CommonSwitchSize icons />
      </Card>
    </Col>
  );
};

export default SwitchWithIcons;
