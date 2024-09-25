import { Label } from "reactstrap";
import { Hover1text, Hover1text2, Location, Locationtext } from "@/utils/Constant";

const Hover1 = () => {
  return (
    <li className="timeline-event">
      <Label className="timeline-event-icon" />
      <div className="timeline-event-wrapper">
        <p className="timeline-thumbnail">{Hover1text}</p>
        <h3>{Location}</h3>
        <span className="text-muted">{Hover1text2}</span>
        <p className="pt-3 mb-4">{Locationtext}</p>
      </div>
    </li>
  );
};

export default Hover1;
