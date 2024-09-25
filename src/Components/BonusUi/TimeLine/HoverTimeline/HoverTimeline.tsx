import { Card, CardBody, Col } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import { HoveringTimeline } from "@/utils/Constant";
import Hover1 from "./Hover1";
import HoverEvent from "./HoverEvent";
import MeetingEvent from "./MeetingEvent";
import { HoverTimelineData } from "@/Data/BonusUi/TimeLine/TimeLineData";

const HoverTimeline = () => {
  return (
    <Col xl={6}>
      <Card className='height-equal' style={{ minHeight: "645.891px" }}>
        <CommonHeader title={HoveringTimeline} subTitle={HoverTimelineData} headClass='pb-0' />
        <CardBody>
          <ul className='square-timeline'>
            <Hover1 />
            <HoverEvent />
            <MeetingEvent />
          </ul>
        </CardBody>
      </Card>
    </Col>
  );
};

export default HoverTimeline;
