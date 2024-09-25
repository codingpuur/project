import { SocialMediaIconsPropsTypes } from "@/Types/Apps/UserProfile";
import { tourProfileData } from "@/Data/Apps/User/UsersProfileData";
import Link from "next/link";

const SocialMediaIcons: React.FC<SocialMediaIconsPropsTypes> = ({ listClassName }) => {
  return (
    <ul className={`justify-content-center ${listClassName ? listClassName : ""} flex-row`}>
      {tourProfileData.map((data, index) => (
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
