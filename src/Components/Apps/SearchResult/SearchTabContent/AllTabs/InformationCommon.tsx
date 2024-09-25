import { Href } from "@/utils/Constant";
import ShowRatings from "./ShowRatings";
import { InformationCommonPropsType } from "@/Types/SearchResultTypes";
import Link from "next/link";

const InformationCommon: React.FC<InformationCommonPropsType> = ({ item }) => {
  return (
    <div className='info-block'>
      <Link href={Href}>{item.url}</Link>
      <h4>{item.title}</h4>
      <p>{item.detail}</p>
      <div className='star-ratings'>
        <ul className='search-info flex-row'>
          {item.showStar ? <ShowRatings item={item.showStar} /> : ""}
          <li>{item.star}</li>
          <li>{item.vote}</li>
          <li>{item.news}</li>
        </ul>
      </div>
    </div>
  );
};

export default InformationCommon;
