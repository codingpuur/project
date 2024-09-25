import { Card, CardBody, Col } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import { LiveToasts } from "@/utils/Constant";
import TopRightToast from "./TopRightToast";
import BottomRightToast from "./BottomRightToast";
import TopLeftToast from "./TopLeftToast";
import BottomLeftToast from "./BottomLeftToast";
import { LiveToastData } from "@/Data/BonusUi/Toast/ToastData";

const LiveToast = () => {
  return (
    <Col md={6}>
      <Card>
        <CommonHeader title={LiveToasts} subTitle={LiveToastData} headClass='pb-0' />
        <CardBody className='position-relative common-flex'>
          <TopRightToast />
          <BottomRightToast />
          <TopLeftToast />
          <BottomLeftToast />
        </CardBody>
      </Card>
    </Col>
  );
};

export default LiveToast;
