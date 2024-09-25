import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { TimeLineData4 } from "@/utils/Constant";

const VerticalTimelineData4 = () => {
  return (
    <VerticalTimelineElement
      className="cd-timeline-block"
      date="June 12 2022"
      icon={
        <div className="cd-timeline-img cd-location bg-info">
          <i className="icon-pulse" />
        </div>
      }
    >
      {TimeLineData4}
    </VerticalTimelineElement>

  );
};

export default VerticalTimelineData4;
