import { Card, CardBody, Col } from "reactstrap";
// import "react-vertical-timeline-component/style.min.css";
import CommonHeader from "@/Common/CommonHeader";
import { TimeLines } from "@/utils/Constant";
import { VerticalTimeline } from "react-vertical-timeline-component";
import VerticalTimelineData1 from "./VerticalTimelineData1";
import VerticalTimelineData2 from "./VerticalTimelineData2";
import VerticalTimelineData3 from "./VerticalTimelineData3";
import VerticalTimelineData4 from "./VerticalTimelineData4";
import VerticalTimelineData5 from "./VerticalTimelineData5";
import VerticalTimelineData6 from "./VerticalTimelineData6";

const TimeLineMain = () => {
  return (
    <Col sm={12} className='box-col-12'>
      <Card>
        <CommonHeader title={TimeLines} subTitle={[{ text: "This is a Cion timeline chart." }]} />
        <CardBody  id='cd-timeline' className='custom-timeline-card'>
          <VerticalTimeline className='cd-container'> 
            <VerticalTimelineData1 />
            <VerticalTimelineData2 />
            <VerticalTimelineData3 />
            <VerticalTimelineData4 />
            <VerticalTimelineData5 />
            <VerticalTimelineData6 />
          </VerticalTimeline>
        </CardBody>
      </Card>
    </Col>
  );
};

export default TimeLineMain;
