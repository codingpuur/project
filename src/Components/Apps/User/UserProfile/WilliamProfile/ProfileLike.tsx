import { Label, List } from "reactstrap";
import { profileLikeData } from "@/Data/Apps/User/UsersProfileData";
import { Href } from "@/utils/Constant";
import CountUp from 'react-countup';
import Link from "next/link";

const ProfileLike = () => {
  return (
    <div className="like-comment mt-4 step7">
      <List type="inline" className="flex-row">
        {profileLikeData.map((item, index) => (
            <li className={item.class} key={index}>
              <Label className="m-0">
                <Link href={Href}>
                  <i className={item.icon} />
                </Link>
                {item.text}
              </Label>
              <span className="ms-2 counter">
                <CountUp end={item.number} duration={5} />
              </span>
            </li>
          ))}
      </List>
    </div>
  );
};

export default ProfileLike;
