import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { TimeLineData3 } from "@/utils/Constant";

const VerticalTimelineData3 = () => {
  return (
    <VerticalTimelineElement
      className="cd-timeline-block"
      date="April 23 2022"
      icon={
        <div className="cd-timeline-img bg-danger">
          <i className="icon-youtube" />
        </div>
      }
    >
      {TimeLineData3}
    </VerticalTimelineElement>
  );
};

export default VerticalTimelineData3;
