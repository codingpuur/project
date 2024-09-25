import { Card, CardBody, Col } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import { IndividualCarousels } from "@/utils/Constant";
import IndividualSlide from "./IndividualSlide";
import { IndividualCarouselData } from "@/Data/BonusUi/Carousel/CarouselData";

const IndividualCarousel = () => {
  return (
    <Col xl={6} xs={12}>
      <Card>
        <CommonHeader title={IndividualCarousels} subTitle={IndividualCarouselData} />
        <CardBody>
          <IndividualSlide />
        </CardBody>
      </Card>
    </Col>
  );
};

export default IndividualCarousel;
