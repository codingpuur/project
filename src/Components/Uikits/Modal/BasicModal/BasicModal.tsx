import { Card, CardBody, Col } from "reactstrap";
import { BasicModals } from "@/utils/Constant";
import SimpleModal from "./SimpleModal";
import ScrollingModal from "./ScrollingModal";
import TooltipModal from "./TooltipModal";
import CubaModal from "./CubaModal";
import CommonHeader from "@/Common/CommonHeader";
import { BasicModalData } from "@/Data/Uikits/Model/ModalData";

const BasicModal = () => {
  return (
    <Col lg={6}>
      <Card>
        <CommonHeader title={BasicModals} subTitle={BasicModalData} headClass='pb-0'/>
        <CardBody className="badge-spacing">
          <SimpleModal />
          <ScrollingModal />
          <TooltipModal />
          <CubaModal />
        </CardBody>
      </Card>
    </Col>
  );
};

export default BasicModal;
