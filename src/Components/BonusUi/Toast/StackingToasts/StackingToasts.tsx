import { Card, CardBody, Col } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import { StackingToast } from "@/utils/Constant";
import StackingToastOne from "./StackingToastOne";
import StackingToastTwo from "./StackingToastTwo";
import StackingToastThree from "./StackingToastThree";
import StackingToastFour from "./StackingToastFour";
import { StackingToastsData } from "@/Data/BonusUi/Toast/ToastData";

const StackingToasts = () => {
  return (
    <Col md={6}>
      <Card>
        <CommonHeader title={StackingToast} subTitle={StackingToastsData} headClass="pb-0"/>
        <CardBody className="toast-rtl">
          <div className="toast-container position-static">
            <StackingToastOne />
            <StackingToastTwo />
            <StackingToastThree />
            <StackingToastFour />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default StackingToasts;
