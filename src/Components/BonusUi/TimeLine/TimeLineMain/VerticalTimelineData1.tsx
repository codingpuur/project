import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { TimeLineData1 } from "@/utils/Constant";

const VerticalTimelineData1 = () => {
  return (
    <VerticalTimelineElement
      className='cd-timeline-block'
      date='February 02 2022'
      icon={
        <div className='cd-timeline-img cd-picture bg-primary'>
          <i className='icon-pencil-alt' />
        </div>
      }
    >
      {TimeLineData1}
    </VerticalTimelineElement>
  );
};

export default VerticalTimelineData1;
