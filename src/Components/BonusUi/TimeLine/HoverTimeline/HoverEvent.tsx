import { Label } from "reactstrap";
import { Afresher, FresherTime, Ofwrrior } from "@/utils/Constant";
import EventList from "./EventList";

const HoverEvent = () => {
  return (
    <li className="timeline-event">
      <Label className="timeline-event-icon" />
      <div className="timeline-event-wrapper">
        <p className="timeline-thumbnail">{FresherTime}</p>
        <h3>{Ofwrrior}</h3>
        <span className="text-muted">{Afresher}</span>
        <p className="pt-3 mb-0"></p>
        <EventList />
      </div>
    </li>
  );
};

export default HoverEvent;
