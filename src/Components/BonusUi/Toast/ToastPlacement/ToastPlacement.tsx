import { Card, CardBody, Col } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import { ToastPlacements } from "@/utils/Constant";
import ToastPlacementsForm from "./ToastPlacementsForm";
import { ToastPlacementTopData } from "@/Data/BonusUi/Toast/ToastData";

const ToastPlacement = () => {
  return (
    <Col sm={12}>
      <Card>
        <CommonHeader headClass="pb-0" title={ToastPlacements} subTitle={ToastPlacementTopData} /> 
        <CardBody className="toast-rtl toast-dark">
            <ToastPlacementsForm />
        </CardBody>
      </Card>
    </Col>
  );
};

export default ToastPlacement;
