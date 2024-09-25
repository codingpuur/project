import { tourProfileData } from "@/Data/BonusUi/Tour/TourData";
import Link from "next/link";

const SocialMedia = () => {
  return (
    <div className="social-media" data-intro="This is your social details">
      <ul className="list-inline flex-row">
        {tourProfileData &&
          tourProfileData.map((item, index) => (
            <li className="list-inline-item" key={index}>
              <Link href={item.link} target="_blank" rel="noreferrer">
                <i className={item.icon} />
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default SocialMedia;
