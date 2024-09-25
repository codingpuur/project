import { Card, Col } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import { DefaultTouchSpinHeading } from "@/utils/Constant";
import { DefaultTouchSpinTopData, defaultTouchSpinData } from "@/Data/Form/FormWidgets/TouchSpinData";
import CommonTouchSpin from "../common/CommonTouchSpin";

const DefaultTouchSpin = () => {
  return (
    <Col xl={6}>
      <Card>
        <CommonHeader title={DefaultTouchSpinHeading} subTitle={DefaultTouchSpinTopData} headClass='pb-0' />
        <CommonTouchSpin touchSpinClassNames={defaultTouchSpinData} />
      </Card>
    </Col>
  );
};

export default DefaultTouchSpin;
