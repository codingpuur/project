import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { TimeLineData5 } from "@/utils/Constant";

const VerticalTimelineData5 = () => {
  return (
    <VerticalTimelineElement
      className="cd-timeline-block"
      date="November 04 2022"
      icon={
        <div className="cd-timeline-img cd-location bg-secondary">
          <i className="icon-pin-alt" />
        </div>
      }
    >
      {TimeLineData5}
    </VerticalTimelineElement>
  );
};

export default VerticalTimelineData5;
