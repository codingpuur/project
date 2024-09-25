import { Card, Col } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import { RoundedTouchSpinHeading } from "@/utils/Constant";
import { RoundedTouchSpinData, defaultTouchSpinData } from "@/Data/Form/FormWidgets/TouchSpinData";
import CommonTouchSpin from "../common/CommonTouchSpin";

const RoundedTouchSpin = () => {
 
  return (
    <Col xl={12}>
      <Card>
        <CommonHeader
          title={RoundedTouchSpinHeading}
          subTitle={RoundedTouchSpinData}
        />
        <CommonTouchSpin
          arrowIcon
          touchSpinClassNames={defaultTouchSpinData}
          cardBodyClassName="rounded-touchspin"
        />
      </Card>
    </Col>
  );
};

export default RoundedTouchSpin;
