import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { TimeLineData2 } from "@/utils/Constant";

const VerticalTimelineData2 = () => {
  return (
    <VerticalTimelineElement
      className="cd-timeline-block"
      date="March 12 2022"
      icon={
        <div className="cd-timeline-img bg-danger">
          <i className="icon-youtube" />
        </div>
      }
    >
      {TimeLineData2}
    </VerticalTimelineElement>
  );
};

export default VerticalTimelineData2;
