import { Card, CardBody, Col } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import { TranslucentToast } from "@/utils/Constant";
import TranslucentToastOne from "./TranslucentToastOne";
import TranslucentToastThree from "./TranslucentToastThree";
import TranslucentToastTwo from "./TranslucentToastTwo";
import TranslucentToastFour from "./TranslucentToastFour";
import { TranslucentToastsData } from "@/Data/BonusUi/Toast/ToastData";

const TranslucentToasts = () => {
  return (
    <Col md={6} className="translucent">
      <Card className="overflow-hidden">
        <CommonHeader title={TranslucentToast} subTitle={TranslucentToastsData} headClass="pb-0" />
        <CardBody className="toast-rtl">
          <div className="toast-container">
            <TranslucentToastOne />
            <TranslucentToastTwo />
            <TranslucentToastThree />
            <TranslucentToastFour />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default TranslucentToasts;
