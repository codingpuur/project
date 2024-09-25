import { Card, CardBody, Col } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import { SlidesOnly } from "@/utils/Constant";
import SlideOnlyCarousel from "./SlideOnlyCarousel";
import { SlideOnlyData } from "@/Data/BonusUi/Carousel/CarouselData";

const SlideOnly = () => {
  return (
    <Col xl={6} xs={12}>
      <Card>
        <CommonHeader title={SlidesOnly} subTitle={SlideOnlyData} headClass="pb-0" />
        <CardBody>
          <SlideOnlyCarousel />
        </CardBody>
      </Card>
    </Col>
  );
};

export default SlideOnly;
