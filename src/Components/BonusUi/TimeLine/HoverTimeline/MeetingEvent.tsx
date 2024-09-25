import { Label } from "reactstrap";
import { USMeeting } from "@/utils/Constant";
import Profile from "./Profile";

const MeetingEvent = () => {
  return (
    <li className="timeline-event">
      <Label className="timeline-event-icon" />
      <div className="timeline-event-wrapper">
        <p className="timeline-thumbnail">{'December 2022 - Meetup'}</p>
        <h3>{USMeeting}</h3>
        <span className="text-muted">{"2209 Leverton Cove RoadSpringfield, MA 01109"}</span>
        <p className="pt-3 mb-0" />
        <Profile />
      </div>
    </li>
  );
};

export default MeetingEvent;
