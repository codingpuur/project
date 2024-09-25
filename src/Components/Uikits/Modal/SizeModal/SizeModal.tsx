import { Card, CardBody, Col } from "reactstrap";
import { SizesModals } from "@/utils/Constant";
import Fullscreen from "./Fullscreen";
import ExtraLarge from "./ExtraLarge";
import LargeModal from "./LargeModal";
import SmallModal from "./SmallModal";
import CommonHeader from "@/Common/CommonHeader";
import { SizeModalData } from "@/Data/Uikits/Model/ModalData";

const SizeModal = () => {
  return (
    <Col lg={6}>
      <Card>
        <CommonHeader title={SizesModals} subTitle={SizeModalData} headClass='pb-0'/>
        <CardBody className="badge-spacing">
          <Fullscreen />
          <ExtraLarge />
          <LargeModal />
          <SmallModal />
        </CardBody>
      </Card>
    </Col>
  );
};

export default SizeModal;
