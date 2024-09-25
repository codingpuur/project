import { CheckAll } from "@/utils/Constant";
import Image from "next/image";
import Link from "next/link";
import { messages } from "@/Data/Layout/Header/MessageData";
import FeatherIcons from "@/utils/CommonSvgIcon/FeatherIcons";
import { ImagePath } from "@/Constant";

const MessageBox = () => {
  return (
    <ul>
      {messages.map((data,index) => (
        <li key={index}>
          <div className="d-flex align-items-start">
            <div className="message-img bg-light-primary">
              <Image src={`${ImagePath}/user/${data.imageSrc}`} alt="" height={40} width={40}/>
            </div>
            <div className="flex-grow-1">
              <h5 className="mb-1">
                <Link href={`/chat/chatapp`}>{data.userName}</Link>
              </h5>
              <p>{data.statusClass}</p>
            </div>
            <div className="notification-right">
              <FeatherIcons iconName="X" />
            </div>
          </div>
        </li>
      ))}
      <li>
        <Link className="f-w-700" href={`/chat/chatapp`}>{CheckAll}</Link>
      </li>
    </ul>
  );
};

export default MessageBox;
