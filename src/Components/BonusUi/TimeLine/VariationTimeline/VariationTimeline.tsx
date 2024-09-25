import { Card, CardBody, Col } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import { VariationTimelines } from "@/utils/Constant";
import Variation1 from "./Variation1";
import Variation2 from "./Variation2";
import Variation3 from "./Variation3";
import { VariationTimelineData } from "@/Data/BonusUi/TimeLine/TimeLineData";

const VariationTimeline = () => {
  return (
    <Col xl={5} xxl={4} className="notification box-col-12">
      <Card>
        <CommonHeader title={VariationTimelines} subTitle={VariationTimelineData} headClass="pb-0"/>
        <CardBody className="dark-timeline">
          <ul>
            <Variation1 />
            <Variation2 />
            <Variation3 />
          </ul>
        </CardBody>
      </Card>
    </Col>
  );
};

export default VariationTimeline;
