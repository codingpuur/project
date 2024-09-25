import { Card, CardBody, Col } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import Conference from "./Conference";
import { HorizontalTimelines } from "@/utils/Constant";
import MeetUp from "./MeetUp";
import Meeting from "./Meeting";
import Conference2 from "./Conference2";
import Meeting2 from "./Meeting2";
import LunchTime from "./LunchTime";
import { HowizontalTimelineData } from "@/Data/BonusUi/TimeLine/TimeLineData";

const HowizontalTimeline = () => {
  return (
    <Col xxl={8} xl={7} className="box-col-12">
      <Card>
        <CommonHeader title={HorizontalTimelines} subTitle={HowizontalTimelineData} headClass="pb-0" />
        <CardBody>
          <ul className="list-inline events timeline-list timeline-border row flex-row">
            <Conference />
            <MeetUp />
            <Meeting />
          </ul>
          <ul className="list-inline events border-0 timeline-list row flex-row">
            <Conference2 />
            <Meeting2 />
            <LunchTime />
          </ul>
        </CardBody>
      </Card>
    </Col>
  );
};

export default HowizontalTimeline;
