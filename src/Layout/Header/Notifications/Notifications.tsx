import SVG from "@/utils/CommonSvgIcon/SVG";
import NotificationBox from "./NotificationBox";
import { Notification } from "@/utils/Constant";

const Notifications = () => {
  return (
    <li className="onhover-dropdown">
      <div className="notification-box">
        <SVG iconId={'Bell'}/>
      </div>
      <div className="onhover-show-div notification-dropdown">
        <h6 className="f-18 mb-0 dropdown-title">{Notification}</h6>
        <NotificationBox />
      </div>
    </li>
  );
};

export default Notifications;
