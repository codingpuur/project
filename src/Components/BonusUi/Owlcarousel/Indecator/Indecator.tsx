import { Card, CardBody, Col } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import { WithIndicators } from "@/utils/Constant";
import IndecatorSlide from "./IndecatorSlide";
import { IndecatorData } from "@/Data/BonusUi/Carousel/CarouselData";

const Indecator = () => {
  return (
    <Col xl={6} xs={12}>
      <Card>
        <CommonHeader title={WithIndicators} subTitle={IndecatorData} headClass="pb-0"/>
        <CardBody>
          <IndecatorSlide />
        </CardBody>
      </Card>
    </Col>
  );
};

export default Indecator;
