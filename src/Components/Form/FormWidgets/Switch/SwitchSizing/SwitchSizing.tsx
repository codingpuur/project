import { Card, Col } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import { SwitchSizingHeading } from "@/utils/Constant";
import CommonSwitchSize from "./CommonSwitchSize";
import { switchSizingHeaderData } from "@/Data/Form/FormWidgets/SwitchData";

const SwitchSizing = () => {
  return (
    <Col md={12}>
      <Card>
        <CommonHeader title={SwitchSizingHeading} subTitle={switchSizingHeaderData} headClass='pb-0' />
        <CommonSwitchSize />
      </Card>
    </Col>
  );
};

export default SwitchSizing;
