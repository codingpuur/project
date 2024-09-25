import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { TimeLineData6 } from "@/utils/Constant";

const VerticalTimelineData6 = () => {
  return (
    <VerticalTimelineElement
      className="cd-timeline-block"
      date="December 31 2022"
      icon={
        <div className="cd-timeline-img cd-movie bg-danger">
          <i className="icon-agenda" />
        </div>
      }
    >
      {TimeLineData6}
    </VerticalTimelineElement>
  );
};

export default VerticalTimelineData6;
