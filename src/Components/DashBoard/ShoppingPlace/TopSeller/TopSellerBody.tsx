import { Button } from "reactstrap";
import {
  SaleImproved,
  Trending,
  VKEnterprise,
  JailRoadSylhet,
} from "@/utils/Constant";
import SVG from "@/utils/CommonSvgIcon/SVG";
import TopSellerImages from "./TopSellerImages";

const TopSellerBody = () => {
  return (
    <>
      <div className="seller-top">
        <Button color="transperant">{Trending}</Button>
        <h4>
          <SVG iconId="location" />
          {JailRoadSylhet}
        </h4>
      </div>
      <div className="user-details customers">
        <div>
          <h3>{VKEnterprise}</h3>
          <TopSellerImages />
        </div>
        <div className="sale-improved">
          <h4>60% {SaleImproved}</h4>
        </div>
      </div>
    </>
  );
};

export default TopSellerBody;
