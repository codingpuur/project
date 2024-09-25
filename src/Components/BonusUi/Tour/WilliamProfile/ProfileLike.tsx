import { Href } from "@/utils/Constant";
import { Label } from "reactstrap";
import Link from "next/link";
import { profileLikeData } from "@/Data/BonusUi/Tour/TourData";

const ProfileLike = () => {
  return (
    <div className="like-comment mt-4 step7">
      <ul className="list-inline flex-row">
        {profileLikeData &&
          profileLikeData.map((item, index) => (
            <li className={item.class} key={index}>
              <Label className="m-0">
                <Link href={Href}>
                  <i className={item.icon} />
                </Link>
                {item.text}
              </Label>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ProfileLike;
