import { Card, CardBody, Col } from "reactstrap";
import { FullscreenModals } from "@/utils/Constant";
import FullscreenOutline from "./FullscreenOutline";
import FullscreenBelowsm from "./FullscreenBelowsm";
import BelowMd from "./BelowMd";
import BelowLg from "./BelowLg";
import BelowXl from "./BelowXl";
import { BelowXXl } from "./BelowXXl";
import CommonHeader from "@/Common/CommonHeader";
import { FullscreenModalData } from "@/Data/Uikits/Model/ModalData";

const FullscreenModal = () => {
  return (
    <Col xl={12}>
      <Card>
        <CommonHeader title={FullscreenModals} subTitle={FullscreenModalData} headClass='pb-0'/>
        <CardBody className="badge-spacing">
          <FullscreenOutline />
          <FullscreenBelowsm />
          <BelowMd />
          <BelowLg />
          <BelowXl />
          <BelowXXl />
        </CardBody>
      </Card>
    </Col>
  );
};

export default FullscreenModal;
