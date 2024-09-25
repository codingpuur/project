import { Messages } from "@/utils/Constant";
import MessageBox from "./MessageBox";
import SVG from "@/utils/CommonSvgIcon/SVG";

const Message = () => {
  return (
    <li className="onhover-dropdown message-box">
      <div className="message notification-box">
        <SVG iconId={'Message'} />
        <span className="rounded-pill badge-secondary"></span>
      </div>
      <div className="onhover-show-div message-dropdown">
        <h6 className="f-18 mb-0 dropdown-title">{Messages}</h6>
        <MessageBox />
      </div>
    </li>
  );
};

export default Message;
