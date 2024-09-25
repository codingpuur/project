import { ChatProfileData } from "@/Data/Apps/Chat/ChatData";
import { ChatSocialMediaIconsPropsTypes } from "@/Types/Apps/ChatTypes";
import Link from "next/link";

const SocialMediaIcons: React.FC<ChatSocialMediaIconsPropsTypes> = ({ listClassName }) => {
  return (
    <ul className={`justify-content-center ${listClassName ? listClassName : ""} flex-row`}>
      {ChatProfileData.map((data, index) => (
        <li key={index}>
          <Link href={data.link}>
            <i className={`${data.icon} me-0`}></i>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SocialMediaIcons;
