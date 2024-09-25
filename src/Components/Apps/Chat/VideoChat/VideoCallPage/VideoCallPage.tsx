import { Col } from "reactstrap";
import IconsMenuList from "./IconsMenuList";
import ChatHistory from "./ChatHistory";
import Image from "next/image";
import { ImagePath } from "@/Constant";

const VideoCallPage = () => {
  return (
    <Col className="pr-xl-0 chat-right-aside">
      <div className="chat">
        <div className="chat-header clearfix">
          <div className="d-flex align-items-center">
            <Image
              className="rounded-circle"
              src={`${ImagePath}/user/8.jpg`}
              alt="user"
              height={100} 
              width={100}
            />
          </div>
          <div className="flex-grow-1">
            <div className="about">
              <div className="name">
                Kori Thomas&nbsp;&nbsp;
                <span className="font-primary f-12">{"Typing..."}</span>
              </div>
              <div className="status digits">{"Last Seen 3:55 PM"}</div>
            </div>
          </div>
          <IconsMenuList />
        </div>
        <div className="chat-history">
            <ChatHistory />
        </div>
      </div>
    </Col>
  );
};

export default VideoCallPage;
