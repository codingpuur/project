import { AddedBewItems, Today } from "@/utils/Constant";
import RecentImage from "./RecentImage";

const Variation2 = () => {
  return (
    <li className="d-flex">
      <div className="activity-dot-warning" />
      <div className="w-100 ms-3">
        <p className="d-flex justify-content-between mb-2">
          <span className="date-content light-background">5th Feb, 2023</span>
          <span>{Today}</span>
        </p>
        <h3>
          {AddedBewItems}
          <span className="dot-notification" />
        </h3>
        <span className="f-light">{"Quisque a consequat ante sit amet magna..."}</span>
        <RecentImage />
      </div>
    </li>
  );
};

export default Variation2;
