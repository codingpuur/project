import { Card, CardBody, Col } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import { VerticalCarousels } from "@/utils/Constant";
import VerticalSlide from "./VerticalSlide";
import { VerticalCarouselData } from "@/Data/BonusUi/Carousel/CarouselData";

const VerticalCarousel = () => {
  return (
    <Col xl={6} xs={12}>
      <Card>
        <CommonHeader title={VerticalCarousels} subTitle={VerticalCarouselData} headClass='pb-0' />
        <CardBody>
          <VerticalSlide />
        </CardBody>
      </Card>
    </Col>
  );
};

export default VerticalCarousel;
