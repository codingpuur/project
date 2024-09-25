import { Card, CardBody, Col } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import { WithControls } from "@/utils/Constant";
import SlideActive from "./SlideActive";
import { WithControllData } from "@/Data/BonusUi/Carousel/CarouselData";

const WithControll = () => {
  return (
    <Col xl={6} xs={12}>
      <Card>
        <CommonHeader title={WithControls} subTitle={WithControllData} headClass='pb-0' />
        <CardBody>
          <SlideActive />
        </CardBody>
      </Card>
    </Col>
  );
};

export default WithControll;
