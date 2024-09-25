import { Card, CardBody, Col } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import { WithCaptions } from "@/utils/Constant";
import CaptionSlider from "./CaptionSlider";
import { WithCaptionData } from "@/Data/BonusUi/Carousel/CarouselData";

const WithCaption = () => {
  return (
    <Col xl={6} xs={12}>
      <Card>
        <CommonHeader title={WithCaptions} subTitle={WithCaptionData} headClass="pb-0"/>
        <CardBody>
          <CaptionSlider />
        </CardBody>
      </Card>
    </Col>
  );
};

export default WithCaption;
