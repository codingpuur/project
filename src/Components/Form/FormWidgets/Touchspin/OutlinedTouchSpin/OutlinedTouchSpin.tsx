import { Card, Col } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import { OutLinedTouchSpinHeading } from "@/utils/Constant";
import { OutlinedTouchSpinAllData, outLinesTouchSpinData } from "@/Data/Form/FormWidgets/TouchSpinData";
import CommonTouchSpin from "../common/CommonTouchSpin";

const OutlinedTouchSpin = () => {
  
  return (
    <Col xl={6}>
      <Card>
        <CommonHeader
          title={OutLinedTouchSpinHeading}
          subTitle={OutlinedTouchSpinAllData}
        />
        <CommonTouchSpin touchSpinClassNames={outLinesTouchSpinData} />
      </Card>
    </Col>
  );
};

export default OutlinedTouchSpin;
