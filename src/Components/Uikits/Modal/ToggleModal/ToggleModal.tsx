import { Card, CardBody, Col } from "reactstrap";
import { ToggleBetweenModals } from "@/utils/Constant";
import ToggleModalBody from "./ToggleModalBody";
import CommonHeader from "@/Common/CommonHeader";
import { ToggleModalTopData } from "@/Data/Uikits/Model/ModalData";

const ToggleModal = () => {
  return (
    <Col xl={4}>
      <Card>
        <CommonHeader title={ToggleBetweenModals} subTitle={ToggleModalTopData} headClass='pb-0'/>
        <CardBody>
          <ToggleModalBody />
        </CardBody>
      </Card>
    </Col>
  );
};

export default ToggleModal;
